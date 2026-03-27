export async function onRequest(context) {
  const url = new URL(context.request.url);
  const assetUrl = new URL('/kit/', url.origin);

  return context.env.ASSETS.fetch(new Request(assetUrl.toString(), context.request));
}
