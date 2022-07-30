import React, { useEffect, useState } from "react";

import { AiFillStar } from "react-icons/ai";

import * as S from "./RatingCard.styles";
import { ReactComponent as Illustration } from "../assets/images/illustration-thank-you.svg";

function RatingCard() {
  const [rating, setRating] = useState(null);
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    if (isSubmited) {
      setTimeout(() => setIsSubmited(false), 10000);
    }
  }, [isSubmited]);

  const selectRating = (rating) => {
    setRating((previousRating) => (previousRating == rating ? null : rating));
  };

  const handleSubmit = () => {
    if(rating != null){
      setIsSubmited(true);
    }
  };

  const FrontCard = (
    <S.CardContainer>
      <S.IconContainer>
        <AiFillStar style={{ fill: "var(--orange)" }} size="1.25em" />
      </S.IconContainer>
      <S.Title>How did we do?</S.Title>
      <S.Text>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </S.Text>
      <S.RatingContainer>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <S.RatingButton
              key={i + i}
              onClick={() => selectRating(i + 1)}
              className={`${rating == i + 1 ? "selected" : ""}`}
            >
              {i + 1}
            </S.RatingButton>
          ))}
      </S.RatingContainer>
      <S.SubmitButton disabled={rating == null} onClick={handleSubmit}>Submit</S.SubmitButton>
    </S.CardContainer>
  );

  const BackCard = (
    <S.CardContainer style={{ alignItems: "center" }}>
      <Illustration />
      <S.RatingMessage>You selected {rating} out of 5</S.RatingMessage>
      <S.Title>Thank you!</S.Title>
      <S.Text>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </S.Text>
    </S.CardContainer>
  );

  return !isSubmited ? FrontCard : BackCard;
}

export default RatingCard;
