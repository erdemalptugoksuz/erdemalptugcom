import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hoş geldin! <br/>
                ben Erdem Alptuğ Öksüz
            </SectionTitle>
            <SectionText>
                Hayalleri ve idealleri olan bir Türk genciyim. Kendimi 5 yıl sonra sizin karşınızda değil, sizi benim karşımda görüyorum.
            </SectionText>
            <Button onClick={() => window.location = "https://google.com"}>Daha fazlası</Button>
        </LeftSection>
    </Section>
);

export default Hero;