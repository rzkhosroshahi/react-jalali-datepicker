import styled from "../../theme";

export const DaysBody = styled("div")<{ isDatePicker?: boolean }>`
  width: ${props => (props.isDatePicker ? "296px" : "280px")};
  max-height: 85%;
  position: relative;
  overflow: auto;
  border-radius: ${8 / 16}rem;
  background-color: ${props => props.theme.backColor};
  & * {
    box-sizing: border-box;
    user-select: none;
  }

  h3,
  p {
    margin: 0;
  }
  @media (min-width: 576px) {
    width: ${props => (props.isDatePicker ? "331px" : "315px")};
  }
`;

export const DaysWrapper = styled("div")<{ isDatePicker?: boolean }>`
  width: 100%;
  font-size: 1rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  padding: ${props => (props.isDatePicker ? `${8 / 16}rem` : 0)};

  th {
    font-size: 1rem;
    font-weight: 300;
    color: ${props => props.theme.weekDaysColor};
  }
`;

export const StyledUl = styled("ul")`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;

    @media (min-width: 576px) {
      width: 45px;
      height: 45px;
    }
  }
`;

export const DaysNameList = styled(StyledUl)`
  align-items: center;
  color: ${props => props.theme.weekDaysColor};
`;

export const DaysNumberList = styled(StyledUl)`
  li {
    margin-bottom: 0.5rem;
  }
`;

export const ButtonsDiv = styled("div")`
  margin-bottom: ${16 / 16}rem;

  button {
    border: none;
    margin: 0;
    padding: ${8 / 16}rem ${24 / 16}rem;
    width: auto;
    min-width: 80px;
    overflow: visible;
    font: inherit;
    line-height: normal;
    appearance: none;
    outline: 0;
    border-radius: ${4 / 16}rem;
    cursor: pointer;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
      outline: 0;
    }
  }
  .rdp__button--cancel {
    margin-right: 1rem;
    color: ${props => props.theme.cancelColor};
    background-color: ${props => props.theme.cancelBackColor};
    transition: background-color 0.2s ease;
    &:hover,
    &:focus {
      color: ${props => props.theme.cancelHoverColor};
      background-color: ${props => props.theme.cancelHoverBackColor};
    }
  }
  .rdp__button--submit {
    margin-right: 1rem;
    color: ${props => props.theme.submitColor};
    background-color: ${props => props.theme.submitBackColor};
    transition: background-color 0.2s ease;
    &:hover,
    &:focus {
      color: ${props => props.theme.submitHoverColor};
      background-color: ${props => props.theme.submitHoverBackColor};
    }
  }
`;

export const ChangeViewButton = styled("button")`
  min-width: 40px !important;
  min-height: 40px;
  float: left;
  margin-left: 16px !important;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease;
  background-color: ${props => props.theme.changeViewButtonBackColor};
  svg {
    fill: ${props => props.theme.changeViewButtonColor};
  }
  &:hover {
    background-color: ${props => props.theme.changeViewButtonHoverBackColor};
    svg {
      fill: ${props => props.theme.changeViewButtonHoverColor};
    }
  }
`;

export const TimeDays = styled("div")`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
