import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import globalVariables from 'styles/general/globalVariables';

const StyledTabList = styled(TabList)`
  margin: 4rem 0;
  text-align: center;
  justify-content: center;
`;

const StyledTab = styled(Tab)`
  display: inline-block;
  position: relative;
  list-style: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: ${globalVariables.text.titleText};
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  &.react-tabs__tab--selected {
    background: ${globalVariables.colours.colour3};
    box-shadow: 0 0 5px grey;
    color: black;
    border-radius: 30px;
    transition: all 1s linear;
  }
`;

export { StyledTab, StyledTabList };
