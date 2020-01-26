import React, { FunctionComponent as FC } from "react";
import './styles.css'

type BallLoaderProps = {};

export const BallLoader: FC<BallLoaderProps> = (props: BallLoaderProps) => {
  return (
    <div className="wrapper">
      <div className="preloader_2">
        <div className="ball ball_1">
          <div className="ball ball_2">
            <div className="ball ball_3">
              <div className="ball ball_4">
                <div className="ball ball_5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
