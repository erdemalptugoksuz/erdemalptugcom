import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Projeler'},
  { number: 2, text: 'Bitirilen Kurslar', }
];

const Acomplishments = () => (
    <Section>
      <SectionTitle>Kişisel Başarılar</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
            <Box key={index}>
                <BoxNum>{card.number}+</BoxNum>
                <BoxText>{card.text}</BoxText>
            </Box>
        ))}
      </Boxes>
    </Section>
);

export default Acomplishments;
