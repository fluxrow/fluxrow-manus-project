import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

type State =
  | { kind: "loading" }
  | { kind: "valid" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "submitting" }
  | { kind: "done" }
  | { kind: "error"; message: string };

const FN_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe`;
const ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export default function Unsubscribe() {
  const [params] = useSearchParams();
  const token = params.get("token") || "";
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "invalid" });
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${FN_URL}?token=${encodeURIComponent(token)}`, {
          headers: { apikey: ANON, Authorization: `Bearer ${ANON}` },
        });
        const data = await res.json().catch(() => ({}));
        if (cancelled) return;
        if (!res.ok) {
          setState({ kind: "invalid" });
        } else if (data.valid === false && data.reason === "already_unsubscribed") {
          setState({ kind: "already" });
        } else if (data.valid === true) {
          setState({ kind: "valid" });
        } else {
          setState({ kind: "invalid" });
        }
      } catch {
        if (!cancelled) setState({ kind: "error", message: "Network error" });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const confirm = async () => {
    setState({ kind: "submitting" });
    try {
      const res = await fetch(FN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: ANON,
          Authorization: `Bearer ${ANON}`,
        },
        body: JSON.stringify({ token }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setState({ kind: "error", message: data.error || "Failed to unsubscribe" });
        return;
      }
      if (data.success || data.reason === "already_unsubscribed") {
        setState({ kind: "done" });
      } else {
        setState({ kind: "error", message: "Unexpected response" });
      }
    } catch {
      setState({ kind: "error", message: "Network error" });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <Helmet>
        <title>Unsubscribe — Fluxrow</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-serif">Unsubscribe</h1>

        {state.kind === "loading" && (
          <p className="text-muted-foreground">Validating your link…</p>
        )}

        {state.kind === "valid" && (
          <>
            <p className="text-muted-foreground">
              Confirm to stop receiving emails from Fluxrow.
            </p>
            <Button onClick={confirm} className="w-full">
              Confirm unsubscribe
            </Button>
          </>
        )}

        {state.kind === "submitting" && (
          <p className="text-muted-foreground">Processing…</p>
        )}

        {state.kind === "already" && (
          <p className="text-muted-foreground">
            You are already unsubscribed. No further action needed.
          </p>
        )}

        {state.kind === "done" && (
          <p className="text-muted-foreground">
            Done. You will no longer receive emails from us.
          </p>
        )}

        {state.kind === "invalid" && (
          <p className="text-muted-foreground">
            This unsubscribe link is invalid or expired.
          </p>
        )}

        {state.kind === "error" && (
          <p className="text-destructive">{state.message}</p>
        )}

        <Link to="/" className="text-sm underline opacity-70">
          Back to fluxrow.com
        </Link>
      </div>
    </main>
  );
}
