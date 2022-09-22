import {
    TextContent
} from './types'

export const textFI: TextContent = {
    navigationMenu: {
        title: '',
        content: {
            frontPage: 'Jukka Keränen',
            me: 'Minä',
            skills: 'Taidot',
            cv: 'CV',
            interests: 'Kiinnostukset',
            contact: 'Yhteys',
        },
    },

    me: {
        title: '',
        content: 'Moi, olen Jukka. Luonteeltani kuulemma puoliksi insinööri ja puoliksi taiteilija. Lue minusta lisää alempaa ja kiva, että pistäydyit!'
    },

    skills: {
        title: 'Taidot',
        content: [
            {
                title: 'Ohjelmointi',
                content: 'Työskentelin noin 2 ja puoli vuotta Software Developerina Optima Solutions Oy:llä. Teknologioina meillä oli käytössä esimerkiksi Typescript, React, PHP, Symfony ja Docker. Aloitin paikassa fronttikoodarina ja pian laajensin kirjoittamaan koodia myös bäkkärin puolelle. Ennen Optima Solutionsia tein yksittäisiä projekteja, kuten esimerkiksi verkkokaupan, nettisivuja ja mobiilipelin. Löydät tämän verkkosivun frontti- ja bäkkärikoodin GitHubista:'
            },
            {
                title: 'Projektinhallinta',
                content: 'Hoidin läpi useita julkisivuremontteja perheyrityksessämme. Vastuullani oli esimerkiksi projektien eteneminen, tarvikkeiden hankinta ja työntekijöiden ohjaaminen. Langat pysyvät siis käsissä isommissakin projekteissa.'
            },
            {
                title: 'Talousosaaminen',
                content: 'Sen lisäksi, että olin vastuussa perheyrityksemme kirjanpidosta ja tilinpäätöksestä, tykkään myös sijoittaa, ja tehdä exceleitä tarpeen tullen.'
            },
            {
                title: 'Viestintä',
                content: 'Pääaineeni yliopistossa oli mediatutkimus ja olen tehnyt hieman alan töitäkin. Tekstin tuottaminen ja yleismaailmallinen viestintä ovat siis hyvin hallinnassa.'
            },
        ]
    },

    cv: {
        title: 'Valikoitu työhistoria',
        content: [
            {
                title: 'Optima Solutions Oy',
                year: '2020/1 - 2022/8',
                jobTitle: 'Software Developer',
                description: 'Kehitin pääasiassa House Optima -järjestelmää ja siihen liittyviä osia.'
            },
            {
                title: 'Julkisivupinnoitus Keränen Oy',
                year: '2012 - 2019',
                jobTitle: 'Projektipäällikkö / Talousvastaava',
                description: 'Olin vastuussa useista julkisivuremonttien toteuttamisesta ja perheyrityksemme kirjanpidosta sekä tilinpäätöksestä. Tein myös hieman markkinointia. Nämä tehtävät eivät vieneet koko työaikaani, joten toimin myös samalla rakennusmiehenä.'
            },
            {
                title: 'Freelancer',
                year: '2013 – 2018',
                jobTitle: 'Kirjanpitäjä',
                description: 'Minulla oli asiakkaina muutamia pienyrityksiä, joille tein kirjanpidon ja tilinpäätöksen. Avustin myös muissa taloushallintoon liittyvissä asioissa.'
            },
            {
                title: 'Freelancer',
                year: '2004 - 2015',
                jobTitle: 'Musiikkiteknologi ja musiikkituottaja',
                description: 'Olen tehnyt äänityksiä ja miksauksia, sekä tuottanut musiikkia useille artisteille ja kokoonpanoille. Yhteistyökumppaneita ovat olleet esimerkiksi Cheek, Herrasmiesliiga, Brädi ja Ideaali & Jay Who.'
            }
        ]
    },

    interests: {
        title: 'Kiinnostukset',
        content: 'Olen pelannut videopelejä 7-vuotiaasta asti ja pelaan edelleen. Tällä hetkellä työn alla on Bloodborne ja Red Dead Redemption 2. Myös elokuvat ovat kiinnostaneet kauan. Seuraavaksi aion mennnä katsomaan Jordan Peelen ohjaaman Nope -elokuvan. Musiikki on kuulunut elämääni aina. Vaikka en ole enää niin aktiivinen muusikko, kuuntelen edelleen paljon musiikkia ja ajoittain puuhailen pienten musiikkiprojektien kanssa. Pidän sijoittamisesta, joten seuraan osakemarkkinoita jonkin verran.'
    },

    contact: {
        title: 'Yhteys',
        content: {
            email: 'keranen.jukkapetteri@gmail.com',
            phone: '050 344 0852',
            ratingText: 'Piditkö nettisivuista?'
        }
    }
}

export const textEN: TextContent = {
    navigationMenu: {
        title: '',
        content: {
            frontPage: 'Jukka Keränen',
            me: 'Me',
            skills: 'Skills',
            cv: 'CV',
            interests: 'Interests',
            contact: 'Contact',
        },
    },

    me: {
        title: '',
        content: 'Hi, I\'m Jukka. I\'ve been described as half engineer and half artist. You can read more about me from this website and it was nice of you to stop by!'
    },

    skills: {
        title: 'Skills',
        content: [
            {
                title: 'Coding',
                content: 'I worked for two and half years at Optima Solutions Oy as a Software Developer. In our technology stack we used for example Typescript, React, PHP, Symfony and Docker. I began as a frontend developer and soon started to write code for backend also. Before Optima Solutions I did small projects like a webshop, websites and a mobile game. You can find the frontend and backend code for this web app from my GitHub:'
            },
            {
                title: 'Project Management',
                content: 'I managed multiple facade renovation projects in our family business. I was in charge of managing projects, employees and supplies, so I can handle projects that has a larger scope.'
            },
            {
                title: 'Financial knowledge',
                content: 'I was in charge of accounting in our family business and I also like to invest and make excel sheets when needed.'
            },
            {
                title: 'Communication',
                content: 'I majored in media studies and I have also worked a little bit in the field of communication.'
            },
        ]
    },

    cv: {
        title: 'Valikoitu työhistoria',
        content: [
            {
                title: 'Optima Solutions Oy',
                year: '2020/1 - 2022/8',
                jobTitle: 'Software Developer',
                description: 'I was a developer for House Optima system and parts that were part of it.'
            },
            {
                title: 'Julkisivupinnoitus Keränen Oy',
                year: '2012 - 2019',
                jobTitle: 'Project Manager / Accountant',
                description: 'I was in charge of managing facade renovations and accounting in our family business. I also did a little bit of marketing. These tasks did not take all of my time so I also worked as a construction worker.'
            },
            {
                title: 'Freelancer',
                year: '2013 – 2018',
                jobTitle: 'Accountant',
                description: 'I did accounting for a few small businesses.'
            },
            {
                title: 'Freelancer',
                year: '2004 - 2015',
                jobTitle: 'Mixing Engineer / Music Producer',
                description: 'I\'ve worked as a music producer and mixing engineer for many artists and bands like Cheek, Herrasmiesliiga, Brädi and Ideaali & Jay Who.'
            }
        ]
    },

    interests: {
        title: 'Interests',
        content: 'I\'ve played video games since I was 7 years old and I still do. Right now I\'m playing Bloodborne and Red Dead Redemption 2. I\'ve also loved movies ever since I can remember. Next, I am going to go and watch Jordan Peele\'s new movie Nope. I also work with some small music projects sometimes and I follow the stock market because I like investing.'
    },

    contact: {
        title: 'Contact',
        content: {
            email: 'keranen.jukkapetteri@gmail.com',
            phone: '050 344 0852',
            ratingText: 'Did you like the website?'
        }
    }
}