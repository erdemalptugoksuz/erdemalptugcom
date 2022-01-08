import React from 'react';
import {DiCode, DiFirebase, DiHtml5, DiJavascript, DiReact, DiZend} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Teknolojiler</SectionTitle>
      <SectionText>
          2018 yılında tanıştığım yazılım sektörüne 2020'de artan merakım ile kendimi geliştirmeye başladım. 2022 itibari ile geliştireceğim projeler ile kendimi bu sektörde ilerletmeyi planlıyorum.
      </SectionText>
      <List>
          <ListItem>
              <DiCode size="3rem"/>
              <ListContainer>
                  <ListTitle>Front-End</ListTitle>
                  <ListParagraph>
                      JavaScript konusunda <br />
                      kendimi geliştiriyorum.
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiFirebase size="3rem"/>
              <ListContainer>
                  <ListTitle>Back-End</ListTitle>
                  <ListParagraph>
                      Php ve Node.js gibi <br />
                      dillerle ilgileniyorum.
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiZend size="3rem"/>
              <ListContainer>
                  <ListTitle>UI-UX</ListTitle>
                  <ListParagraph>
                      Figma gibi tasarım araçları <br />
                      ile çalışıyorum.
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
