import React, { useState } from "react";
import "../styles/FontMakePage/FontMakePage.scss";
import ready_1 from "../assets/font_make/ready_1.png";
import ready_2 from "../assets/font_make/ready_2.png";
import ready_3 from "../assets/font_make/ready_3.png";
import ready_4 from "../assets/font_make/ready_4.png";
import { useEffect } from "react";

const FontMakePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  let nowImage = null;

  useEffect(() => {
    const makeProgressDiv = document.getElementsByClassName("make_progress");
    const currentNumDiv = document.getElementsByClassName("current_num");
    for (let index = 0; index < makeProgressDiv.length; index++) {
      const element = makeProgressDiv[index];
      element.classList.remove("current_state_display");
      currentNumDiv[index].classList.remove("current_state_num_display");
    }

    if (currentStep <= 4) {
      makeProgressDiv[0].classList.add("current_state_display");
      currentNumDiv[0].classList.add("current_state_num_display");
    } else {
      makeProgressDiv[1].classList.add("current_state_display");
      currentNumDiv[1].classList.add("current_state_num_display");
    }
  }, [currentStep]);

  function clickStepButton(type) {
    setCurrentStep(
      type === "prev"
        ? currentStep === 1
          ? 1
          : currentStep - 1
        : currentStep + 1
    );
  }

  return (
    <div className="FontMakePage">
      <div className="current_step_box">
        <div className="make_progress" id="make_progress_1">
          <span className="current_state_num_display current_num">1.</span>
          &nbsp; 준비하기
        </div>
        <div className="make_progress" id="make_progress_2">
          <span className="current_num">2.</span>&nbsp; 업로드
        </div>
        <div className="make_progress" id="make_progress_3">
          <span className="current_num">3.</span>&nbsp; 최종 확인
        </div>
        <div className="make_progress" id="make_progress_4">
          <span className="current_num">4.</span>&nbsp; 완료
        </div>
      </div>
      <div className="make_box">
        {[1, 2, 3, 4].map((_, i) => {
          switch (i) {
            case 0:
              nowImage = ready_1;
              break;
            case 1:
              nowImage = ready_2;
              break;
            case 2:
              nowImage = ready_3;
              break;
            case 3:
              nowImage = ready_4;
              break;
            default:
              break;
          }

          return (
            <img
              className="make_ready_img"
              src={nowImage}
              alt="준비1"
              key={i}
              style={
                currentStep === i + 1
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
          );
        })}
        {currentStep === 5 && (
          <div className="make_upload_box" id="">
            <div className="image_upload_preview">
              <img src="" alt="이미지를 업로드 해주세요" />
            </div>
            <button className="image_upload_button">
              <span className="image_upload_text">이미지 고르기</span>
            </button>
          </div>
        )}
        <div className="prev_next_button_box">
          <button
            className={
              currentStep === 1 ? "prev_button noHover" : "prev_button"
            }
            onClick={() => clickStepButton("prev")}
          >
            이전
          </button>
          <button
            className="next_button"
            onClick={() => clickStepButton("next")}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default FontMakePage;
