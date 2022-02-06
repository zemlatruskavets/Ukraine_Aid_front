import { CircularImage } from 'components/single/Images';
import { MainGrid, TextContainer } from 'styles/pages/HomePage';

export default function Story() {
  return (
    <MainGrid>
      <CircularImage image="https://res.cloudinary.com/dwbsammvs/image/upload/v1643081175/Ukrainian/me_jwmqpp.jpg" />
      <p>A</p>
      <div>
        <p>
          I am a second generation Ukrainian Canadian.
          <br /> On December 24, 1941, my grandmother, along with her father,
          mother, and sister, left their Christmas meal on the table in order to
          flee an incoming Nazi invasion force.
          <br /> This set into motion their journey across Ukraine, Poland, and
          Germany, where they were captive labourers in a German munitions plant
          for the next three years. This was followed by almost three years in
          refugee camps in Germany and England, before she managed to emigrate
          to Canada. <br />
          My grandmother, Ludmila, died last year at the age of 96.
          <br />
          Almost 80 years later, Ukraine again faces the threat of invasion from
          an overwhelming outside force. <br />
          War is a political act paid for in human suffering. <br />
          All too often, that suffering is so overwhelming as to be abstract,
          removed.
          <br /> But there are few things less abstract than the needs of people
          evacuating war zones. They need advice, transportation, money, and a
          place to stay.
        </p>
      </div>
    </MainGrid>
  );
}
