const accordionData = [
  {
    title: 'мені потрібна порада',
    level: 1,
    children: [
      {
        title: 'про підготовку',
        level: 2,
        children: [
          {
            title: 'що я повинен знати в першу чергу?',
            level: 3,
            externalLink: 'https://www.mil.gov.ua/content/pdf/NS-WAR.pdf',
          },
          {
            title: 'які документи мені потрібні?',
            level: 3,
            externalLink:
              'https://novograd.city/cards/190922/a-raptom-vijna-poradi-yak-diyati-u-razi-nadzvichajnoi-situacii-abo-vijni',
          },
          {
            title: 'що мені принести?',
            level: 3,
            externalLink: 'https://inspired.com.ua/ideas/tips/emergency-bag/',
          },
        ],
      },
      {
        title: 'про евакуацію',
        level: 2,
        children: [
          {
            title: 'загальні поради',
            level: 3,
            externalLink:
              'https://www.martsinkiv.if.ua/shcho-robyty-iakshcho-vijna/',
          },
          {
            title: 'коли йти',
            level: 3,
            externalLink:
              'https://hromadske.ua/posts/trivozhna-valiza-sho-do-neyi-poklasti-shob-vizhiti',
          },
          {
            title: 'що робити',
            level: 3,
            externalLink:
              'https://novograd.city/cards/190922/a-raptom-vijna-poradi-yak-diyati-u-razi-nadzvichajnoi-situacii-abo-vijni',
          },
        ],
      },
      {
        title: 'куди йти',
        level: 2,
        children: [
          {
            title: 'загальні поради',
            level: 3,
            externalLink:
              'https://life.pravda.com.ua/society/2022/01/31/247299/',
          },
          {
            title: 'інтерактивна карта',
            level: 3,
            externalLink:
              'https://reach-info.org/ukr/idps_settlements/settlements_opportunities.html',
          },
          {
            title: 'бомбосховища в Києві',
            level: 3,
            externalLink:
              'https://www.google.com/maps/d/u/0/viewer?mid=14PnyHN3WPgBZgpJ3q0BOMswKge1hv1au&ll=50.433909133043855%2C30.48571115&z=11',
          },
        ],
      },
    ],
  },
  {
    title: 'I need help',
    level: 1,
    children: [
      {
        title: 'view offers',
        level: 2,
        internalLink: '/offers',
      },
      {
        title: 'create a request',
        level: 2,
        internalLink: '/requests',
      },
    ],
  },
  {
    title: 'I want to help',
    level: 1,
    children: [
      {
        title: 'view requests',
        level: 2,
        internalLink: '/requests',
      },
      {
        title: 'create an offer',
        level: 2,
        internalLink: '/offers',
      },
      {
        title: 'donate to an organization',
        level: 2,
        children: [
          {
            title: 'supporting the war effort',
            level: 3,
            children: [
              {
                title: '',
                level: 4,
                externalLink: '',
              },
              {
                title: '',
                level: 4,
                internalLink: '',
              },
              {
                title: '',
                level: 4,
                externalLink: '',
              },
            ],
          },
          {
            title: 'supporting evacuees',
            level: 3,
            children: [
              {
                title: 'UN Refugee Agency',
                level: 4,
                externalLink: 'https://www.unhcr.org/ua/',
              },
              {
                title: 'Right to Defense',
                level: 4,
                externalLink:
                  'https://r2p.org.ua/vnutrishno-peremishheni-osoby/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'I want to record a war crime',
    level: 1,
    children: [
      {
        title: 'see my reports',
        level: 2,
        internalLink: '/reports',
      },
      {
        title: 'create a new report',
        level: 2,
        internalLink: '/reports',
      },
    ],
  },
];

export default accordionData;
