
import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
      </div>
      <style>{`
        .ai-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.1), transparent),
                      radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.1), transparent),
                      radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.1), transparent),
                      radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.1), transparent),
                      radial-gradient(2px 2px at 160px 30px, rgba(255,255,255,0.1), transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: float 20s linear infinite;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-200px, -100px); }
        }
        
        .ai-grid-overlay {
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-float 30s linear infinite;
        }
        
        @keyframes grid-float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </>
  );
};

export default BackgroundEffects;
