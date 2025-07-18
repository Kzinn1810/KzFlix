const dados = [
      {
        id: 1,
        tipo: "movie",
        titulo: "Pecadores",
        descricao:
          "Um terror gótico e musical ambientado no sul dos EUA nos anos 1930, onde vampiros racistas enfrentam músicos negros em uma batalha por alma, cultura e sobrevivência.",
        imagem: "imagens/pecadores.webp",
        video:
          "https://drive.google.com/file/d/1-VvLUBMOAhIjrcJiB2_ileQxgTKKbZvM/preview",
        trailer: "https://www.youtube.com/embed/V3spHR5x5QY",
        generos: ["terror", "suspense", "drama"],
        //ano: 2025
      },
      {
        id: 2,
        tipo: "series",
        titulo: "Stranger Things",
        descricao: "Um grupo de amigos enfrenta eventos sobrenaturais em sua cidade.",
        imagem: "imagens/stranger-things.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "O Desaparecimento de Will Byers", video: "https://drive.google.com/file/d/10_1wujyB8LFZ7ssQbN3QJub2bGfwagAU/preview" },
              { numero: 2, titulo: "A Estranha da Maple Street", video: "https://drive.google.com/file/d/10_WLJCixI5bjOUsM0YPXlCwr_Uv2DlFI/preview" },
              { numero: 3, titulo: "Caramba", video: "https://drive.google.com/file/d/1246KSteW2dm7Zd4eTNNiLU4GkS0GtlQx/preview" },
              { numero: 4, titulo: "O Corpo", video: "https://drive.google.com/file/d/124mATi0t5ToEo1A_cGObKmkJ1cxLOyi6/preview" },
              { numero: 5, titulo: "A Pulga e o Acrobata", video: "https://drive.google.com/file/d/10-6UqEj83aG9wcIeJwJRU_Fyd8KANiZn/preview" },
              { numero: 6, titulo: "O Monstro", video: "https://drive.google.com/file/d/12Ot2VL_0xVTsoGppz-zt2GgAF7cRpAFj/preview" },
              { numero: 7, titulo: "A Banheira", video: "https://drive.google.com/file/d/12QzD7n6oouZyR6qXGR6VbaNMKh75fTGR/preview" },
              { numero: 8, titulo: "O Mundo Invertido", video: "https://drive.google.com/file/d/109XCvlL9k5oTWrbK_79LrFh0cNzWBkNd/preview" },
            ],
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "MADMAX", video: "https://drive.google.com/file/d/10eScNqZgMQPnMRecFgsFaKZeogd1zqve/preview" },
              {
                numero: 2,
                titulo: "Gostosuras ou Travessuras, Esquisitão",
                video:
                  "https://drive.google.com/file/d/10eis8dY32cPg9bWkXx0A0KnMK9tBdrNn/preview",
              },
              {
                numero: 3,
                titulo: "O Girino",
                video:
                  "https://drive.google.com/file/d/12kJiUYeWA7B7xgnNFzn1lzDESZ38fs0u/preview",
              },
              {
                numero: 4,
                titulo: "Will, o Sábio",
                video:
                  "https://drive.google.com/file/d/12ko1gnjyN8p6-8Svwnvy4qrQx0yDX8y5/preview",
              },
              {
                numero: 5,
                titulo: "Dig Dug",
                video:
                  "https://drive.google.com/file/d/12lCcglwQwu4Gm4N-CUaBQC7ZICRowwHR/preview",
              },
              {
                numero: 6,
                titulo: "O Espião",
                video:
                  "https://drive.google.com/file/d/12rZJP9B-tfu7szFmXfQOHDGOlD-sYmfX/preview",
              },
              {
                numero: 7,
                titulo: "A Irmã Perdida",
                video:
                  "https://drive.google.com/file/d/12shE-9QYdWqfUV2scu_VUHbZeYHQnsDg/preview",
              },
              {
                numero: 8,
                titulo: "Devorador de Mentes",
                video:
                  "https://drive.google.com/file/d/12x1zwpzAHKi6zVG4INtPdOG6hzbBobF-/preview",
              },
              {
                numero: 9,
                titulo: "O Portal",
                video:
                  "https://drive.google.com/file/d/1-9bJDjKaFUuHhk8XtCPDn7hWsfwV3Sf7/preview",
              },
            ],
          },
          {
            numero: 3,
            episodios: [
              {
                numero: 1,
                titulo: "Está me ouvindo, Suzie?",
                video:
                  "https://drive.google.com/file/d/1-pjTGDGnB3bIM_Q2YWBMnBEPhKs8QfMr/preview",
              },
              {
                numero: 2,
                titulo: "O caso dos ratos",
                video:
                  "https://drive.google.com/file/d/1-wk42grROqnHekZlISTehWyFwHc3H90O/preview",
              },
              {
                numero: 3,
                titulo: "A salva‑vidas desaparecida",
                video:
                  "https://drive.google.com/file/d/10-6Hs0iAkFLX9gBhFyKEkCrYsbII3sa5/preview",
              },
              {
                numero: 4,
                titulo: "A prova da sauna",
                video:
                  "https://drive.google.com/file/d/1-xic4jherQedP1oLLokl83O56wcwwY5C/preview",
              },
              {
                numero: 5,
                titulo: "Os devorados",
                video:
                  "https://drive.google.com/file/d/104zxQzMrmRjphMjN_aw8H1hJVyAYcuAo/preview",
              },
              {
                numero: 6,
                titulo: "mantido como E Pluribus Unum",
                video:
                  "https://drive.google.com/file/d/1064IMqsw6NYzTpz7d3MhILWTfELDegyT/preview",
              },
              {
                numero: 7,
                titulo: "A mordida",
                video:
                  "https://drive.google.com/file/d/10-yZZKOewJrTUEX6QuMYOSh4ys1m9laM/preview",
              },
              {
                numero: 8,
                titulo: "A batalha de Starcourt",
                video:
                  "https://drive.google.com/file/d/10-prdN69rpI8tHHAZ79QwEfmn9UBDlm0/preview",
              },
            ],
          }, 
          {
            numero: 4,
            episodios: [
              {
                numero: 1,
                titulo: "O Clube Hellfire",
                video:
                  "https://drive.google.com/file/d/10GsgJxBxJXxlmtDpL6feyvoaht7aL6X_/preview",
              },
              {
                numero: 2,
                titulo: "A Maldição de Vecna",
                video:
                  "https://drive.google.com/file/d/10JUsSPiBDd942kHbikDuwWX4Tb9Ds1p_/preview",
              },
              {
                numero: 3,
                titulo: "O Monstro e a Super-Heroína",
                video:
                  "https://drive.google.com/file/d/10VO9m9xEx4X6aJ0uYJkD8346K6vAaltI/preview",
              },
              {
                numero: 4,
                titulo: "Querido Billy",
                video:
                  "https://drive.google.com/file/d/10_ar8jf04qQYlFG1_6n5TzpYK5wXJezE/preview",
              },
              {
                numero: 5,
                titulo: "Projeto Nina",
                video:
                  "https://drive.google.com/file/d/10_j1FtWPTMRO3HJCk_-BfoGUr8Pw0z0w/preview",
              },
              {
                numero: 6,
                titulo: "Mergulho",
                video:
                  "https://drive.google.com/file/d/10_tplDZjiTfSLvB0U4BTc87aHW8b5zw1/preview",
              },
              {
                numero: 7,
                titulo: "O Massacre no Laboratório de Hawkins",
                video:
                  "https://drive.google.com/file/d/10j65quYuD73aD6LzTarqWhzCy5Arw3_F/preview",
              },
              {
                numero: 8,
                titulo: "Papai",
                video:
                  "https://drive.google.com/file/d/10mrcHoLLMCu9-FVLpA-qA5jPgNvUmRZX/preview",
              },
              {
                numero: 9,
                titulo: "O Plano de Onze",
                video:
                  "https://drive.google.com/file/d/10rJxdsh5qesA8Un3hEr6BPHE4MAIaiW9/preview",
              },
            ],
          },                                
        ],
        trailer: "https://www.youtube.com/embed/mnd7sFt5c3A",
        generos: ["drama", "ficção científica", "terror"],
        //ano: 2016
      },
      {
        id: 3,
        tipo: "movie",
        titulo: "Homem-Aranha: Através do Aranhaverso",
        descricao:
          "Miles Morales viaja por universos paralelos e enfrenta um multiverso de Homens-Aranha.",
        imagem: "imagens/homem-aranha-atraves-do-aranhaverso.webp",
        video:
          "https://drive.google.com/file/d/12ZGCSys7_TfVhnrIRkwG12IuryvIfdav/preview",
        trailer: "https://www.youtube.com/embed/uhkDkurK0Zg",
        generos: ["ação", "animação", "ficção científica"],
        //ano: 2023
      },
      {
        id: 4,
        tipo: "series",
        titulo: "Cobra Kai",
        descricao:
          "Continuando a rivalidade do Karate Kid, jovens reativam o dojo Cobra Kai.",
        imagem: "imagens/cobra-kai.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              {
                numero: 1,
                titulo: "O Degenerado Número Um",
                video:
                  "https://drive.google.com/file/d/11ejjutRFtMhwi-92GmPzp0e4eWA3NN5o/preview",
              },
              {
                numero: 2,
                titulo: "Ataque Primeiro",
                video:
                  "https://drive.google.com/file/d/11faAVg_jVJ2BgENFUrHIfwYiGJTn2qjm/preview",
              },
              {
                numero: 3,
                titulo: "Esqueleto",
                video:
                  "https://drive.google.com/file/d/12wpo9-WSp1ZnHpNVQIGqwZXgQ0FzPs4F/preview",
              },
              {
                numero: 4,
                titulo: "O Cobra Kai nunca morre",
                video:
                  "https://drive.google.com/file/d/12zzCm_pzr68L84q5FkifilcNTjtvA0d1/preview",
              },
              {
                numero: 5,
                titulo: "Contrapeso",
                video:
                  "https://drive.google.com/file/d/10H0a1Lg4DFR5W9enRVDpHfbJuC6Q2gvV/preview",
              },
              {
                numero: 6,
                titulo: "Grupo de cobras",
                video:
                  "https://drive.google.com/file/d/13BFYksJDpnTfS9H4v7y6fJGS0T7bR2dY/preview",
              },
              {
                numero: 7,
                titulo: "All Valley",
                video:
                  "https://drive.google.com/file/d/13KzpxjUfiveereT_QUKK86yhG8XSx-2N/preview",
              },
              {
                numero: 8,
                titulo: "Mudança de pele",
                video:
                  "https://drive.google.com/file/d/10wm8n0Q1_H-erKDbMz7BVC2j55k8sBOR/preview",
              },
              {
                numero: 9,
                titulo: "Diferentes mas iguais",
                video:
                  "https://drive.google.com/file/d/114Rtts9-MXi_Tx1wot4RxA67Pg0eLQWQ/preview",
              },
              {
                numero: 10,
                titulo: "Compaixão",
                video:
                  "https://drive.google.com/file/d/113ouzfKcE44wejHsNK3yXH_JefpF-_Ft/preview",
              },
            ],
          },
          {
            numero: 2,
            episodios: [
              {
                numero: 1,
                titulo: "Compaixão – Parte II",
                video:
                  "https://drive.google.com/file/d/1-91_rzFP564Tzd6K35fBWJqdXNaJUU1i/preview",
              },
              {
                numero: 2,
                titulo: "De Volta ao Jogo",
                video:
                  "https://drive.google.com/file/d/1-I6zX8X5Wu9UDoYSiWX23DdzEsQXOE1A/preview",
              },
              {
                numero: 3,
                titulo: "Fogo e Gelo",
                video:
                  "https://drive.google.com/file/d/1-T0dR4B68ICSjNbrhvysKQ8yEEb1xBVJ/preview",
              },
              {
                numero: 4,
                titulo: "O Momento da Verdade",
                video:
                  "https://drive.google.com/file/d/1-JNABFoU0OIxFqb58-fM3V66jN7pyXEZ/preview",
              },
              {
                numero: 5,
                titulo: "Tudo ou Nada",
                video:
                  "https://drive.google.com/file/d/1-SpwVwd9-mti9wTH1FrBcp4lH4mQMSYc/preview",
              },
              {
                numero: 6,
                titulo: "Vire à Direita",
                video:
                  "https://drive.google.com/file/d/1-sOG-bZ84-8oVSipwzjMZeWozlr615ar/preview",
              },
              {
                numero: 7,
                titulo: "Intervalo",
                video:
                  "https://drive.google.com/file/d/1-TXhEM51H_HnhO8rVer_p7b1oTbTjv9N/preview",
              },
              {
                numero: 8,
                titulo: "Glória do Amor",
                video:
                  "https://drive.google.com/file/d/1-ad0JWBiuezx09YOdFMtHnM4NLz_tiZh/preview",
              },
              {
                numero: 9,
                titulo: "Polvo",
                video:
                  "https://drive.google.com/file/d/1-c_9aVkkdaTxQRy8rLT1_P676OpJL6ta/preview",
              },
              {
                numero: 10,
                titulo: "Sem Misericórdia",
                video:
                  "https://drive.google.com/file/d/1-Hlz_VAqvxTYDKi7Q0e1EKQy4zLnC2h9/preview",
              },
            ],
          },
        {
            numero: 3,
            episodios: [
              {
                numero: 1,
                titulo: "Depois da Tempestade",
                video:
                  "https://drive.google.com/file/d/1-t5GkKwrhfB6_LhhiA6uQXf1EfdinUDZ/preview",
              },
              {
                numero: 2,
                titulo: "Natureza em Repouso",
                video:
                  "https://drive.google.com/file/d/1-oG8MNyZm5pDacA8LblzeEG7TzJYdzyg/preview",
              },
              {
                numero: 3,
                titulo: "Agora Você Vai Pagar",
                video:
                  "https://drive.google.com/file/d/11563iHDWxsxV5u9yxaLBP21Rl4ybvDWI/preview",
              },
              {
                numero: 4,
                titulo: "O Direito do Rei",
                video:
                  "https://drive.google.com/file/d/11KMNpCtEFl2Xc32A6hLf2G7cyOY47fDl/preview",
              },
              {
                numero: 5,
                titulo: "Miyagi-Do",
                video:
                  "https://drive.google.com/file/d/11UmzntbTEIZAzwq3XgPNJO44ntlGTvh1/preview",
              },
              {
                numero: 6,
                titulo: "Rei Cobra",
                video:
                  "https://drive.google.com/file/d/11Ojor9xxBOCSogwxyDrF79Cby_nPIYJe/preview",
              },
              {
                numero: 7,
                titulo: "Obstáculos",
                video:
                  "https://drive.google.com/file/d/11UssQ3ASoaFIl8jgMNuJHnga5uPLm_yj/preview",
              },
              {
                numero: 8,
                titulo: "A Vítima",
                video:
                  "https://drive.google.com/file/d/11VmUHrIuigf-zuFM5wXD2qPgCRCsK-t3/preview",
              },
              {
                numero: 9,
                titulo: "Sentido",
                video:
                  "https://drive.google.com/file/d/11Vd8lSG_D2Ijun342cGPJW1-Cox8LjWH/preview",
              },
              {
                numero: 10,
                titulo: "19 de Dezembro",
                video:
                  "https://drive.google.com/file/d/11EzSxsBF4yXkonBPsQz0Z1llJJmQ6BX7/preview",
              },
            ],
          },
          {
            numero: 4,
            episodios: [
              { numero: 1, titulo: "Vamos Começar", video: "https://drive.google.com/file/d/10FZvvEpW_hVvlyxOiC_4cEt8k6fKrgrv/preview" },
              { numero: 2, titulo: "Primeiro Aprenda a Ficar de Pé", video: "https://drive.google.com/file/d/10MF_CUGQ_bflKW9roQ2nFPtVa7JkmBG5/preview" },
              { numero: 3, titulo: "Depois Aprenda a Voar", video: "https://drive.google.com/file/d/10NIbCPIEplzVcaJZ4tOQ4R1oowGS1Vmy/preview" },
              { numero: 4, titulo: "Bicefalia", video: "https://drive.google.com/file/d/10P0orfDJFmxQjGMYShnjKD2IQqzhLNKs/preview" },
              { numero: 5, titulo: "Ponto de Partida", video: "https://drive.google.com/file/d/10e1a3T2FAMwoPGpfwfGrmEC00TYlviEt/preview" },
              { numero: 6, titulo: "Chutes Conseguem Garotas", video: "https://drive.google.com/file/d/10epssPY84pzbAJ9nLv1sn8E5Mnw1i11R/preview" },
              { numero: 7, titulo: "Campos Minados", video: "https://drive.google.com/file/d/10jfoZ-MVEuNiqNf9j5uAtNH0o0wFADQ_/preview" },
              { numero: 8, titulo: "Hora da Festa", video: "https://drive.google.com/file/d/10lRn2gBmGa8J6R-jl5wgzp-Xs6v9wgdZ/preview" },
              { numero: 9, titulo: "A Queda", video: "https://drive.google.com/file/d/10pBTcGRz4QaiLkMFcQKADXnGSYf6ctKo/preview" },
              { numero: 10, titulo: "A Ascensão", video: "https://drive.google.com/file/d/10KNiVznUoRgKnV0fdSX0z6auX0MD7UX3/preview" },
            ],
          },
          {
            numero: 5,
            episodios: [
              { numero: 1, titulo: "Um Longo Caminho de Casa", video: "https://drive.google.com/file/d/10rG9fmY1ZDWD6CTrMgLASsxEmi5hicyy/preview" },
              { numero: 2, titulo: "Espião", video: "https://drive.google.com/file/d/117I5vJJNjZIlDExqMcsy4ACtn9SLjLKJ/preview" },
              { numero: 3, titulo: "Brincando com Fogo", video: "https://drive.google.com/file/d/119cr8uEvUS-fBPI0nmJsP9toZOmdEF7G/preview" },
              { numero: 4, titulo: "Espiral Descendente", video: "https://drive.google.com/file/d/11BDi7CIYQO5uWwme4lnpc2cTg-GmPfsX/preview" },
              { numero: 5, titulo: "Medidas Extremas", video: "https://drive.google.com/file/d/11V_s2LiglkrWLx_5Wbck4OFiMiJBKlUG/preview" },
              { numero: 6, titulo: "Ouroboros", video: "https://drive.google.com/file/d/11Zb_ybwzkRkpezY2jX0lWspEzJrbZzFM/preview" },
              { numero: 7, titulo: "Ovos Ruins", video: "https://drive.google.com/file/d/11_XA_fQx0-n8XFPRxX-6YKW7ZlsUp_3l/preview" },
              { numero: 8, titulo: "Taikai", video: "https://drive.google.com/file/d/11aBPv7R87UZwJpldnibwqsWbFlN81P7q/preview" },
              { numero: 9, titulo: "Sobreviventes", video: "https://drive.google.com/file/d/11dn5D72brxLFWDnpetcsOJ19Y067VyUo/preview" },
              { numero: 10, titulo: "A Cabeça da Serpente", video: "https://drive.google.com/file/d/10z3XugIS7r8QPZJb27lfD1AMSIAah2Ke/preview" },
            ],
          },
          {
            numero: 6,
            episodios: [
              { numero: 1, titulo: "Tempos de Paz no Vale", video: "https://drive.google.com/file/d/11vj3inX6mtMeEM4pC0ohqjz5UEoTffwT/preview" },
              { numero: 2, titulo: "Beira-Mar", video: "https://drive.google.com/file/d/12JESDBYqwGp6LIFoCA6tCHAMaXcuC-Q3/preview" },
              { numero: 3, titulo: "O Melhor", video: "https://drive.google.com/file/d/12P7DqcMooRHRep6YFMzickEW8A_2X_2_/preview" },
              { numero: 4, titulo: "Irmãos", video: "https://drive.google.com/file/d/12QItspraPiKK7CEVLrlRKeLAxH5zE6Zv/preview" },
              { numero: 5, titulo: "A Pressão", video: "https://drive.google.com/file/d/12VvOh60mIbSDwIcz3ZVh8fbABuhPLWMz/preview" },
              { numero: 6, titulo: "bem-vindos a barcelona", video: "https://drive.google.com/file/d/12XDPp8bisiw9GL58JA33JI1ody1nVWDm/preview" },
              { numero: 7, titulo: "cachorro na luta", video: "https://drive.google.com/file/d/12bSQLvlFttqwcTjpFn3MnL3H09Gn0g8t/preview" },
              { numero: 8, titulo: "cobras no avião", video: "https://drive.google.com/file/d/12cXNpi9CRXtJkrvue02z3u_d9OGyamWl/preview" },
              { numero: 9, titulo: "sangue com sangue", video: "https://drive.google.com/file/d/12f9ZbYokM6vdmTkrSH2q7yPwi76En4gg/preview" },
              { numero: 10, titulo: "kwon", video: "https://drive.google.com/file/d/11xyS7GNNsD0HS8Dp8OxDej0ZTE8ecGO6/preview" },
              { numero: 11, titulo: "no fogo", video: "https://drive.google.com/file/d/11zHQHN50UTOeUOxIC3hMRPf8ezTiaGBq/preview" },
              { numero: 12, titulo: "chocado", video: "https://drive.google.com/file/d/12AWYAYbUaiHlUorX0CanUu8AKK0a7Ey7/preview" },
              { numero: 13, titulo: "esqueletos", video: "https://drive.google.com/file/d/1-EWnl7TM5Sz_2eAUDLAwLwRdkCJIeqcj/preview" },
              { numero: 14, titulo: "ataque por ultimo", video: "https://drive.google.com/file/d/12G27NWiAF1GsW7rLu3U829Lbk3XZs6gO/preview" },
              { numero: 15, titulo: "ex-degenerado", video: "https://drive.google.com/file/d/12HADlVRlIcc9C7_iBU50i7aovdO2p1s0/preview" },
            ],
          }
        ],
        trailer: "https://www.youtube.com/embed/xCwwxNbtK6Y",
        generos: ["ação", "drama"],
        //ano: 2018
      },
      {
        id: 5,
        tipo: "movie",
        titulo: "Um Filme Minecraft",
        descricao:
          "live-action baseado no famoso jogo da Mojang, que acompanha uma adolescente e seu grupo improvável de heróis tentando salvar o mundo do Ender Dragon.",
        imagem: "imagens/minecraft.webp",
        video:
          "https://drive.google.com/file/d/1-e4f4uwm1mQVOy-XpLZRiov1Un-sfevT/preview",
        trailer: "https://www.youtube.com/embed/SZMub74Xd-Q",
        generos: ["aventura", "fantasia"],
        //ano: 2025
      },
      {
        id: 6,
        tipo: "series",
        titulo: "Round 6",
        descricao:
          "Centenas de pessoas com dificuldades financeiras aceitam um convite para participar de jogos mortais valendo um grande prêmio em dinheiro.",
        imagem: "imagens/round-6.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              {
                numero: 1,
                titulo: "Luz Vermelha, Luz Verde",
                video:
                  "https://drive.google.com/file/d/1plAblGZJOYvfpaUkiOvZRS965JuDATPt/preview",
              },
              {
                numero: 2,
                titulo: "Inferno",
                video:
                  "https://drive.google.com/file/d/165hBLBc7qJetgp3d7NFquYSrdFKE4OL1/preview",
              },
              {
                numero: 3,
                titulo: "O Homem do Guarda-Chuva",
                video:
                  "https://drive.google.com/file/d/168-iztih5KB9JZzFyld_IWRe3iRmKqko/preview",
              },
              {
                numero: 4,
                titulo: "Permaneçam Juntos",
                video:
                  "https://drive.google.com/file/d/168Be9u375lh8o3d7BzHpbIBIxOIG0jnB/preview",
              },
              {
                numero: 5,
                titulo: "Um Mundo Justo",
                video:
                  "https://drive.google.com/file/d/16CT1-nbETzJOVLP-DeaMb34I_aG3Twwm/preview",
              },
              {
                numero: 6,
                titulo: "Bolinhas",
                video:
                  "https://drive.google.com/file/d/16GIMa-7v50JOtvtwwdzYrVeUh0WFHjcG/preview",
              },
              {
                numero: 7,
                titulo: "VIPs",
                video:
                  "https://drive.google.com/file/d/16LQCb7Xi71vHFMAy0M8XV3AkaH95vhL4/preview",
              },
              {
                numero: 8,
                titulo: "O Homem de Máscara",
                video:
                  "https://drive.google.com/file/d/16XTerbnW_3CfiGx-26wHHjc_iBnzTV5x/preview",
              },
              {
                numero: 9,
                titulo: "Um Dia de Sorte",
                video:
                  "https://drive.google.com/file/d/16_m0OF95EcGnL0d7f2lTPuJoNZe8VYaj/preview",
              },
            ],
          },
          {
            numero: 2,
            episodios: [
              {
                numero: 1,
                titulo: "Pão e loteria",
                video:
                  "https://drive.google.com/file/d/1-DEqWPiCH3Fa5huZ16NJkyImXIKn0mn3/preview",
              },
              {
                numero: 2,
                titulo: "Festa de Halloween",
                video:
                  "https://drive.google.com/file/d/1-DMqFIOWMjJ7clzxX9GIeh2bM6Ye5b_h/preview",
              },
              {
                numero: 3,
                titulo: "001",
                video:
                  "https://drive.google.com/file/d/1-EjrF5YGVmS-Zpf6cHALTaX0CfdfTX7Z/preview",
              },
              {
                numero: 4,
                titulo: "Seis pernas",
                video:
                  "https://drive.google.com/file/d/1-GAx5WoRSLbrRsWiinGQqsQX5EaZB4Gq/preview",
              },
              {
                numero: 5,
                titulo: "Mais um jogo",
                video:
                  "https://drive.google.com/file/d/1-HB2yLA2bLHVi4Xm2Gkg47o7Rxw3SlVj/preview",
              },
              {
                numero: 6,
                titulo: "0 X",
                video:
                  "https://drive.google.com/file/d/1-HSSIvXIpUCgRAHROjuevSwkur66OH0t/preview",
              },
              {
                numero: 7,
                titulo: "Amigos ou inimigos?",
                video:
                  "https://drive.google.com/file/d/1-JolDVAyIfwVmg3BJEgosKImdu8ByIi-/preview",
              },
            ],
          },
          {
            numero: 3,
            episodios: [
              {
                numero: 1,
                titulo: "Chaves e facas",
                video:
                  "https://drive.google.com/file/d/1-MCw1KdTiRNvO8KB5n9-L7doK5WqWKCE/preview",
              },
              {
                numero: 2,
                titulo: "Noite estrelada",
                video:
                  "https://drive.google.com/file/d/1-N9vW1aFWCzFuOY5FQ7IeNCTAEhhNTwB/preview",
              },
              {
                numero: 3,
                titulo: "Não é culpa sua",
                video:
                  "https://drive.google.com/file/d/1-QF6s40AIBTBzt0AoQfoypii8bPw39Mp/preview",
              },
              {
                numero: 4,
                titulo: "222",
                video:
                  "https://drive.google.com/file/d/1-TJ3aoQt6OTHSpoUmTX_b0Nyc7gC3Sse/preview",
              },
              {
                numero: 5,
                titulo: "○△□",
                video:
                  "https://drive.google.com/file/d/1-TU3MzisTGl7C54Pr_iY0OSvlkZBDSyh/preview",
              },
              {
                numero: 6,
                titulo: "Humanos",
                video:
                  "https://drive.google.com/file/d/1-ajNJxcGW27vaOlSzSwnahqVo42fCIBK/preview",
              },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/oqxAJKy0ii4",
        generos: ["drama", "suspense", "ação"],
        //ano: 2021
      },
      {
        id: 7,
        tipo: "movie",
        titulo: "Vingadores: Ultimato",
        descricao:
          "Os Vingadores restantes se unem para desfazer as ações de Thanos e restaurar o universo.",
        imagem: "imagens/vingadores-ultimato.webp",
        video:
          "https://drive.google.com/file/d/1-WpCJYdLf1P5qSM4eHbiv5PRxY7NMZ-3/preview",
        trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2019
      },
      {
        id: 8,
        tipo: "series",
        titulo: "Dark",
        descricao:
          "Dark é uma série alemã de ficção científica e suspense que explora viagens no tempo e os segredos sombrios de quatro famílias interligadas.",
        imagem: "imagens/dark.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              {
                numero: 1,
                titulo: "Segredos",
                video:
                  "https://drive.google.com/file/d/102SGUVg5piDjkOlpltoJSq-PPT_tKcrr/preview",
              },
              {
                numero: 2,
                titulo: "Mentirosos",
                video:
                  "https://drive.google.com/file/d/104eAEVzIUMs4xtDwaKDE35AYthP01pjt/preview",
              },
              {
                numero: 3,
                titulo: "Passado e Presente",
                video:
                  "https://drive.google.com/file/d/108LI4kH1oJVoplLU8vx5iVMXG2puMM_M/preview",
              },
              {
                numero: 4,
                titulo: "Duplo Viver",
                video:
                  "https://drive.google.com/file/d/10k_HhWtTJ1_nYXbpKmrhTR2mbyOToauH/preview",
              },
              {
                numero: 5,
                titulo: "A Verdade",
                video:
                  "https://drive.google.com/file/d/10nPKhRbXzqh_Kv7meNCslhNPITGc1zAI/preview",
              },
              {
                numero: 6,
                titulo: "Tudo é Agora",
                video:
                  "https://drive.google.com/file/d/10osbuXXwzZs8EYRFd6RwBzRtOOhjqsHv/preview",
              },
              {
                numero: 7,
                titulo: "Entre o Tempo",
                video:
                  "https://drive.google.com/file/d/10pDzGPRNOCb-uT53gYExJCRTUsFUXBrZ/preview",
              },
              {
                numero: 8,
                titulo: "O Que Se Semear, Se Colhe",
                video:
                  "https://drive.google.com/file/d/10yKIyqfod3BRWLVUX01LxhOoEc5cPiLr/preview",
              },
              {
                numero: 9,
                titulo: "Tudo se Repete",
                video:
                  "https://drive.google.com/file/d/112IqZoerm3kild7cycx8oETtsLc7PBqj/preview",
              },
              {
                numero: 10,
                titulo: "Alfa e Ômega",
                video:
                  "https://drive.google.com/file/d/116XWWWdSb0E7YiWtqXGyJPWFIFf10R74/preview",
              },  
            ],
          },
          {
            numero: 2,
            episodios: [
              {
                numero: 1,
                titulo: "Inícios e Finais",
                video:
                  "https://drive.google.com/file/d/12GjEt9WnO_-EElEEUsNxOHh_jKMGzCw9/preview",
              },
              {
                numero: 2,
                titulo: "Matéria Escura",
                video:
                  "https://drive.google.com/file/d/12HKYJuLo5n_-yd6Fg1Za3wEoU8DZe2b7/preview",
              },
              {
                numero: 3,
                titulo: "Fantasmas",
                video:
                  "https://drive.google.com/file/d/12NDcmKioXYfZXiRkHNCIvZqEmbz9UbFR/preview",
              },
              {
                numero: 4,
                titulo: "Os Viajantes",
                video:
                  "https://drive.google.com/file/d/12RSAcGC5uevwS6ikbP3nEgRC9blvOBpf/previewk",
              },
              {
                numero: 5,
                titulo: "Achados e Perdidos",
                video:
                  "https://drive.google.com/file/d/12QBmx839BUZstX2iVDP_WNThA4j8_Kfw/preview",
              },
              {
                numero: 6,
                titulo: "Um Ciclo Sem Fim",
                video:
                  "https://drive.google.com/file/d/12ckZ65-wSsxLPFu_LPC-bs2km6WdeOgF/preview",
              },
              {
                numero: 7,
                titulo: "O Diabo Branco",
                video:
                  "https://drive.google.com/file/d/12a3xVaT2iJea0PZAFezebFK92RGuPaXI/preview",
              },
              {
                numero: 8,
                titulo: "Finais e Inícios",
                video:
                  "https://drive.google.com/file/d/12ccFTaTIQAI5g0YAi3gHgFAkhjyICpcD/preview",
              },             
            ],
          },
          {
            numero: 3,
            episodios: [
              {
                numero: 1,
                titulo: "Deja-vu",
                video:
                  "https://drive.google.com/file/d/1-C6AvI4SBesH_47eVL4_G7Pl9ATY94Mh/preview",
              },
              {
                numero: 2,
                titulo: "Os Sobreviventes",
                video:
                  "https://drive.google.com/file/d/1-J8ffOln6uk10gyGzm_KXIPNd2MPQntQ/preview",
              },
              {
                numero: 3,
                titulo: "Adão e Eva",
                video:
                  "https://drive.google.com/file/d/1-K1JRMPOkxqVZ5ldNlQPO-bErCpqoxs8/preview",
              },
              {
                numero: 4,
                titulo: "A Origem",
                video:
                  "https://drive.google.com/file/d/1-HE4B9cVybxrS2lhTmcYCnX96aCe1WN-/preview",
              },
              {
                numero: 5,
                titulo: "Vida e Morte",
                video:
                  "https://drive.google.com/file/d/1-FpcvxoXMxho39i7NT0nR68pXQcFrD_x/preview",
              },
              {
                numero: 6,
                titulo: "Luz e Sombra",
                video:
                  "https://drive.google.com/file/d/1-UFyVqiTbZ0w61lvC2qigftrit3FQRCg/preview",
              },
              {
                numero: 7,
                titulo: "Entre o Tempo",
                video:
                  "https://drive.google.com/file/d/11EJjCC-iMSRValSQssQas4dqXVEBgree/preview",
              },
              {
                numero: 8,
                titulo: "O Paraíso",
                video:
                  "https://drive.google.com/file/d/1-RYxpvU_GHbt9sBMTMWvK-C7G_ruktiP/preview",
              },             
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/xCwwxNbtK6Y",
        generos: ["ficção científica", "mistério", "drama", "suspense"],
        //ano: 2017
      },
      {
        id: 9,
        tipo: "movie",
        titulo: "Ainda estou aqui",
        descricao:
          "Ainda Estou Aqui é um drama emocionante que retrata o luto, o amor e a luta de uma jovem para manter viva a memória do namorado após sua morte.",
        imagem: "imagens/ainda-estou-aqui.webp",
        video:
          "https://drive.google.com/file/d/16g0QWKerQvxBJtnOTFppz9nA_3moLbDh/preview",
        trailer: "http://www.youtube.com/embed/Inl8WuKkQfQ",
        generos: ["drama", "romance"],
        //ano: 2024
      },
      {
        id: 10,
        tipo: "series",
        titulo: "Locke & Key",
        descricao:
          "Locke & Key é uma série de fantasia e mistério que segue os irmãos Locke, que descobrem chaves mágicas em sua casa ancestral, cada uma com poderes únicos, enquanto enfrentam forças sombrias.",
        imagem: "imagens/locke-e-key.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "Bem-vindos a Matheson", video: "https://drive.google.com/file/d/11pbwc8AO69R_zbH1-zmlQEHjal5IsIme/preview" },
              { numero: 2, titulo: "Caçador", video: "https://drive.google.com/file/d/12WafZsQjK99sIkU5W64hXwyWP_JQzvQU/preview" },
              { numero: 3, titulo: "Jogos Mentais", video: "https://drive.google.com/file/d/11zy11G7Et-uzZvFD4snKzfiLbC5KSvHs/preview" },
              { numero: 4, titulo: "Os Guardiões das Chaves", video: "https://drive.google.com/file/d/122_OhnM5SyvElRvafiB7n5GHmJiMjXn0/preview" },
              { numero: 5, titulo: "Árvore Genealógica", video: "https://drive.google.com/file/d/12FAweHn_ZJq3GjR8oUmOfeVD0jIONdTB/preview" },
              { numero: 6, titulo: "A Porta Negra", video: "https://drive.google.com/file/d/12E-R3e5UTHr8_-EUBrq9T7J2w0lZiJgA/preview" },
              { numero: 7, titulo: "Dissecação", video: "https://drive.google.com/file/d/12K2NvXrWuWo0F80s_QZ-57q8T7t81U7Y/preview" },
              { numero: 8, titulo: "Um Raio de P*ta de Sol", video: "https://drive.google.com/file/d/12FVOAkTstJiSP2pvnSFVDHFCguMcIFwz/preview" },
              { numero: 9, titulo: "Ecos", video: "https://drive.google.com/file/d/12WYIJ-wxoMjspAabzDYUEyTg89hRZHAN/preview" },
              { numero: 10, titulo: "Coroa das Sombras", video: "https://drive.google.com/file/d/123mWm_v6d6iK4nnEsUDj7hnuMM1U7yy7/preview" },
            ],
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "O Cofre de Demônios", video: "https://drive.google.com/file/d/137VZvW0wejoVzKiOwB4xhVn9X31BD1h7/preview" },
              { numero: 2, titulo: "A Cabeça e o Coração", video: "https://drive.google.com/file/d/13GAfMYr9gynBnlA2oBNIWn4D7RK6xsd9/preview" },
              { numero: 3, titulo: "Esquecido", video: "https://drive.google.com/file/d/13IwltUTGPRELJAA-htrIZ_Wa-vpKjodE/preview" },
              { numero: 4, titulo: "Mais Rápido do que a Luz", video: "https://drive.google.com/file/d/13Kk-MYQ2ZafOL7WUS-fWd83M6PnOhBAO/preview" },
              { numero: 5, titulo: "Jogada Dupla", video: "https://drive.google.com/file/d/13Vtl4kD3-wrcFnGFGDTIpNLJt459UVxF/preview" },
              { numero: 6, titulo: "A Chave da Mímica", video: "https://drive.google.com/file/d/13b5Yg8_lU-c0rRrKfm2jIZRXFk2ZPQz0/preview" },
              { numero: 7, titulo: "Perfuração", video: "https://drive.google.com/file/d/13cFRYXPlqxsSwamqQ6UXOXmUAqlpMiO9/preview" },
              { numero: 8, titulo: "Irmãos", video: "https://drive.google.com/file/d/1-ZcWQ9Q6yhWbOU04Mufa-OVTcvDxu1Zd/preview" },
              { numero: 9, titulo: "Alfa e Ômega", video: "https://drive.google.com/file/d/13ubWdVVnI4vfcUfVUjqDVaNf6dbqJJ7T/preview" },
              { numero: 10, titulo: "O Relicário", video: "https://drive.google.com/file/d/13DF6yYlHiM9x0uwusdeGLEQDjJsvmlHD/preview" },
            ],
          },
          {
            numero: 3,
            episodios: [
              { numero: 1, titulo: "A Invasão", video: "https://drive.google.com/file/d/10-MB-ddUpFC9KG6PQdq0DeL-CJvGg7wR/preview" },
              { numero: 2, titulo: "As Cortes do Céu", video: "https://drive.google.com/file/d/1-eRPUV9rij4drBsuk9DPNbpAby95IPWa/preview" },
              { numero: 3, titulo: "O Fim do Mundo", video: "https://drive.google.com/file/d/10DXK4JsuYV1CrH_pSgJDpN0W7jC75gOC/preview" },
              { numero: 4, titulo: "A Chave da Memória", video: "https://drive.google.com/file/d/10H7BboiVMPwaOoEQz9gSVX1oldkT7JZL/preview" },
              { numero: 5, titulo: "Corrente do Mal", video: "https://drive.google.com/file/d/10KVOT0FH1TRteGMcOw6hM2s7jC6APcQX/preview" },
              { numero: 6, titulo: "Dança da Chave", video: "https://drive.google.com/file/d/10NBWEF_eT404tUQZRfWjGnlcoyR23TmA/preview" },
              { numero: 7, titulo: "Eco", video: "https://drive.google.com/file/d/10QmQ9yEkoQydvZ_o5HBHYvbGkUuLDmxd/preview" },
              { numero: 8, titulo: "A Chave do Abismo", video: "https://drive.google.com/file/d/10_9YfGy2Q_K0_oqtdwy_xD-10voR4UKo/preview" },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/U6mCkzv7WPM",
        generos: ["fantasia", "mistério", "terror"],
        //ano: 2021
      },
      {
        id: 11,
        tipo: "movie",
        titulo: "Como Treinar o Seu Dragão",
        descricao:
          "Como Treinar o Seu Dragão é uma animação que conta a história de um jovem viking chamado Soluço, que se torna amigo de um dragão chamado Banguela, desafiando as tradições de sua tribo.",
        imagem: "imagens/como-treinar-seu-dragao.webp",
        video:
          "https://drive.google.com/file/d/12L_3Y_Pi7j-j5-xtXAQJqtbVVigPFxDb/preview",
        trailer: "https://www.youtube.com/embed/CWTy1ukPoYY",
        generos: ["aventura", "animação", "fantasia"],
        //ano: 2025
      },
      {
        id: 12,
        tipo: "movie",
        titulo: "Meu Malvado Favorito 4",
        descricao:
          "O vilão mais amado do planeta, que virou agente da Liga Antivilões, retorna para mais uma aventura em Meu Malvado Favorito 4.",
        imagem: "imagens/meu-malvado-favorito-4.webp",
        video:
          "https://drive.google.com/file/d/11AhnRsCSjnfxL1t0RuUiwDs1ES9rPl5Y/preview",
        trailer: "https://www.youtube.com/embed/seSIJf5mhPE",
        generos: ["aventura", "animação", "comédia"],
        //ano: 2024
      },
      {
        id: 13,
        tipo: "movie",
        titulo: "Sorria",
        descricao:
          "Após presenciar um evento traumático, uma terapeuta começa a vivenciar eventos assustadores.",
        imagem: "imagens/sorria.webp",
        video:
          "https://drive.google.com/file/d/1-YpwEhiJZBieq3DZom2PZFvLVW2LJd6N/preview",
        trailer: "https://www.youtube.com/embed/BcDK7lkzzsU",
        generos: ["terror", "drama"],
        //ano: 2022
      },
    {
        id: 14,
        tipo: "series",
        titulo: "Arcanjo Renegado",
        descricao:
          "Arcanjo Renegado é uma série policial brasileira que acompanha um justiceiro do Bope dividido entre a lei e a violência para combater o crime no Rio de Janeiro.",
        imagem: "imagens/arcanjo-renegado.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              {
                numero: 1,
                titulo: "Episódio 1",
                video:
                  "https://drive.google.com/file/d/10ZIxNHqhSdbKp7mJFamiAWGkeNZl8p3s/preview",
              },
              {
                numero: 2,
                titulo: "Episódio 2",
                video:
                  "https://drive.google.com/file/d/10ciVj2-RbFI5xULfu_tQZaUc0w48Q1kP/preview",
              },
              {
                numero: 3,
                titulo: "Episódio 3",
                video:
                  "https://drive.google.com/file/d/10g70JssxI7WoejbCvGTOma7uu7kUnC1S/preview",
              },
              {
                numero: 4,
                titulo: "Episódio 4",
                video:
                  "https://drive.google.com/file/d/10k9oMnbiOhlbmLeQ9m_1ij1rtep6m2qi/preview",
              },
              {
                numero: 5,
                titulo: "Episódio 5",
                video:
                  "https://drive.google.com/file/d/10hW1dZWsPF1nnf9S4yt1EBonWyLe9vjo/preview",
              },
              {
                numero: 6,
                titulo: "Episódio 6",
                video:
                  "https://drive.google.com/file/d/10oajxjCmyfNEtU6t0FFalRms5-qVV-eX/preview",
              },
              {
                numero: 7,
                titulo: "Episódio 7",
                video:
                  "https://drive.google.com/file/d/10tyGsirAVWaSRMKLVs0thQWA0pbiYK5T/preview",
              },
              {
                numero: 8,
                titulo: "Episódio 8",
                video:
                  "https://drive.google.com/file/d/10v1ph-TFvxkJAtxNI2UY3mypRV18ZTWr/preview",
              },
              {
                numero: 9,
                titulo: "Episódio 9",
                video:
                  "https://drive.google.com/file/d/10xE37UnHbVdMmNlu2J_nhBStSF6hTpqf/preview",
              },
              {
                numero: 10,
                titulo: "Episódio 10",
                video:
                  "https://drive.google.com/file/d/10tW8ZfaTKH8UaCjd6_FxhSq6Mwx4ydO7/preview",
              },
            ],
          },
          {
            numero: 2,
            episodios: [
              {
                numero: 1,
                titulo: "Episódio 1",
                video:
                  "https://drive.google.com/file/d/111T8hjHpvuFuzl7FvcQzzpN_ADw9LqFR/preview",
              },
              {
                numero: 2,
                titulo: "Episódio 2",
                video:
                  "https://drive.google.com/file/d/11ATZNJwa6efdNl4tEJc8dJa27JKPS5S1/preview",
              },
              {
                numero: 3,
                titulo: "Episódio 3",
                video:
                  "https://drive.google.com/file/d/11BqdnXcDJh10_l_-w7cgEz6K6311xlOP/preview",
              },
              {
                numero: 4,
                titulo: "Episódio 4",
                video:
                  "https://drive.google.com/file/d/11GHs9sGPctcIx_gZOUB0kP--bPPH_R4t/preview",
              },
              {
                numero: 5,
                titulo: "Episódio 5",
                video:
                  "https://drive.google.com/file/d/11CzLm67dj0J_0ghpLWl2gxbFLBu176lp/preview",
              },
              {
                numero: 6,
                titulo: "Episódio 6",
                video:
                  "https://drive.google.com/file/d/11MirhSiVgzTuCvyN2DCOI-LL-UMi6-7U/preview",
              },
              {
                numero: 7,
                titulo: "Episódio 7",
                video:
                  "https://drive.google.com/file/d/11Icl9mCIG0sx_9tQf6zuhwdAr0n-jPg0/preview",
              },
              {
                numero: 8,
                titulo: "Episódio 8",
                video:
                  "https://drive.google.com/file/d/11W2eQ9DJKDc0Nv1TZ4wzrab-OhNV3j0Z/preview",
              },
              {
                numero: 9,
                titulo: "Episódio 9",
                video:
                  "https://drive.google.com/file/d/11NEeygSCvzXebhjV5_5_U6Pma9Q6kAhc/preview",
              },
              {
                numero: 10,
                titulo: "Episódio 10",
                video:
                  "https://drive.google.com/file/d/114w8HMsPWM-sMmaNyeWBKEhfC0R0JO-T/preview",
              },
            ],
          },
          {
            numero: 3,
            episodios: [
              {
                numero: 1,
                titulo: "Episódio 1",
                video:
                  "https://drive.google.com/file/d/11rMhXME0AovuhPRWb4Fkn3FJF0iaJJek/preview",
              },
              {
                numero: 2,
                titulo: "Episódio 2",
                video:
                  "https://drive.google.com/file/d/12BIm4dn0j7zbH5UgEjUx8Kf7Y9Vm7s_X/preview",
              },
              {
                numero: 3,
                titulo: "Episódio 3",
                video:
                  "https://drive.google.com/file/d/11omMHTqCBRMdZnk5phvf1fRivHqTtx4l/preview",
              },
              {
                numero: 4,
                titulo: "Episódio 4",
                video:
                  "https://drive.google.com/file/d/11rZyvKKG2U9XeGTwm6K88RJrW20q89eX/preview",
              },
              {
                numero: 5,
                titulo: "Episódio 5",
                video:
                  "https://drive.google.com/file/d/11wBQ-OhG2sBe55-aMl-UbSE321tOkuLI/preview",
              },
              {
                numero: 6,
                titulo: "Episódio 6",
                video:
                  "https://drive.google.com/file/d/11xXsWxi5sZj2qhvx360pDZmlFN0dfcZX/preview",
              },
              {
                numero: 7,
                titulo: "Episódio 7",
                video:
                  "https://drive.google.com/file/d/121KPwJ0Rqwvd227OQHwutlJTwtGtYZJF/preview",
              },
              {
                numero: 8,
                titulo: "Episódio 8",
                video:
                  "https://drive.google.com/file/d/12BaZrWoYpwf97Q_TReS_0CbHNJiplvgT/preview",
              },
              {
                numero: 9,
                titulo: "Episódio 9",
                video:
                  "https://drive.google.com/file/d/12Dt8MnyYWK6rjfXRPhhTS_5EdpqCW0em/preview",
              },
              {
                numero: 10,
                titulo: "Episódio 10",
                video:
                  "https://drive.google.com/file/d/129QQq2tAFb7NHpAml-Co2hGum9oNkcu9/preview",
              },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/FaEX2c6VW-E",
        generos: ["drama", "suspense", "ação"],
        //ano: 2020
      },
      {
        id: 15,
        tipo: "movie",
        titulo: "Ballerina - Do Universo de John Wick",
        descricao:
          "A trama segue uma assassina habilidosa, interpretada por Ana de Armas, que foi treinada nas tradições da organização Ruska Roma.",
        imagem: "imagens/ballerina.webp",
        video:
          "https://drive.google.com/file/d/11D9uDj3Scnc7vIYl1-gxsDHy1149-iUP/preview",
        trailer: "https://www.youtube.com/embed/EPf9rNjbBpw",
        generos: ["ação", "suspense"],
        //ano: 2025
      },
      {
      id: 16,
        tipo: "movie",
        titulo: "Deadpool & Wolverine",
        descricao:
          "Filme do universo Marvel que reúne o irreverente mercenário Deadpool e o mutante Wolverine em uma aventura cheia de humor ácido, ação intensa e viagens pelo multiverso.",
        imagem: "imagens/deadpool-wolverine.webp",
        video:
          "https://drive.google.com/file/d/1-Zypj93QGX_PJW9TjTqfurdhvgfvdhVu/preview",
        trailer: "https://www.youtube.com/embed/dEbe0rS4Z2A",
        generos: ["comédia", "ação"],
        //ano: 2024
      },
      {
      id: 17,
        tipo: "movie",
        titulo: "Gente grande",
        descricao:
          "Um grupo de amigos de infância se reencontra após muitos anos para reviver momentos divertidos e caóticos em um fim de semana juntos.",
        imagem: "imagens/gente-grande.webp",
        video:
          "https://drive.google.com/file/d/12_JTNRo6Su0Q1V2VOMKnaMM1pkDIpHT8/preview",
        trailer: "https://www.youtube.com/embed/HKVve_VSz58",
        generos: ["comédia", "familia"],
        //ano: 2010
      },
      {
        id: 18,
        tipo: "movie",
        titulo: "Divertidamente 2",
        descricao:
          "Riley enfrenta novas emoções na adolescência, incluindo Ansiedade, Inveja e Vergonha.",
        imagem: "imagens/divertidamente-2.webp",
        video:
          "https://drive.google.com/file/d/12N8oGT62UlTothlQ7KKx1qm1heUaFAt0/preview",
        trailer: "https://www.youtube.com/embed/yAZxx8t9zig",
        generos: ["animação", "comédia", "aventura"],
        //ano: 2024
      },
      {
        id: 19,
        tipo: "series",
        titulo: "Naruto",
        descricao:
          "Naruto é um anime que acompanha a jornada de um jovem ninja determinado a conquistar o reconhecimento de sua vila e se tornar Hokage.",
        imagem: "imagens/naruto.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              {
                numero: 1,
                titulo: "Uzumaki Naruto Chega!",
                video:
                  "https://drive.google.com/file/d/11rk7hZ-_ojYspVZNBSvV30sKKsk0WzO1/preview",
              },
              {
                numero: 2,
                titulo: "Meu Nome é Konohamaru!",
                video:
                  "https://drive.google.com/file/d/11sdNfqjVtoUz8-VPJp3SxQx2nwBOJC7w/preview",
              },
              {
                numero: 3,
                titulo: "Sasuke e Sakura: Amigos ou Inimigos?",
                video:
                  "https://drive.google.com/file/d/11xQUrRiU7i2fB9bOXpctnHtMFjqadcLA/preview",
              },
              {
                numero: 4,
                titulo: "Passar ou Falhar — Um Teste de Sobrevivência!",
                video:
                  "https://drive.google.com/file/d/11tNk1OcyTs9FsIQxx8ETEA8Y_LvjMAB_/preview",
              },
              {
                numero: 5,
                titulo: "Você Fracassou! A Decisão Final de Kakashi",
                video:
                  "https://drive.google.com/file/d/120jKvYbSSy3KBrp_WO02PaRni5Arr785/preview",
              },
              {
                numero: 6,
                titulo: "Uma Missão Perigosa! Aventura ao País das Ondas!",
                video:
                  "https://drive.google.com/file/d/12-5yqaXdEVfXjfjt-QhjLLOubcY8-Exf/preview",
              },
              {
                numero: 7,
                titulo: "O Assassino da Névoa",
                video:
                  "https://drive.google.com/file/d/122y9rEeuC-hXyG1Bjdc0v9hkvcN0ENeC/preview",
              },
              {
                numero: 8,
                titulo: "O Juramento de sangue",
                video:
                  "https://drive.google.com/file/d/125FawxQZqUo1nW8ov7z2M7jFgSi1XBxK/preview",
              },
              {
                numero: 9,
                titulo: "Kakashi: O ninja que copia",
                video:
                  "https://drive.google.com/file/d/124kHtDEI_x2zQXbdrxh_h2Gu4zlt71XE/preview",
              },
              {
                numero: 10,
                titulo: "Naruto Vê o Seu Futuro!",
                video:
                  "https://drive.google.com/file/d/12Boap-89AvJ8__ODTK0KJlC0zQleen45/preview",
              },
              {
                numero: 11,
                titulo: "A Terra Onde um Herói Nunca Morrerá",
                video:
                  "https://drive.google.com/file/d/11kvBtYU97B9ihdkx8_0NLCkdSnI__Ls4/preview",
              },
              {
                numero: 12,
                titulo: "A Batalha Começa: Naruto x Sasuke",
                video:
                  "https://drive.google.com/file/d/11s293M3FMuLGExizxxfAuqHgeqZZ_3s2/preview",
              },
              {
                numero: 13,
                titulo: "O Segredo do Sharingan",
                video:
                  "https://drive.google.com/file/d/11rP6gp-Ftf7BW4qK9yit3q5U2jnj-3Ef/preview",
              },
              {
                numero: 14,
                titulo: "Eu Não Vou Fugir!",
                video:
                  "https://drive.google.com/file/d/11sVwQhmxXP7YkcJS9OCVMZMpTfSkSewp/preview",
              },
              {
                numero: 15,
                titulo: "A Batalha Final: Zabuza vs Kakashi!",
                video:
                  "https://drive.google.com/file/d/123OUlCWbfuYTe5P71TzW3t-LNCl8Il5R/preview",
              },
              {
                numero: 16,
                titulo: "O Selo se Rompe: Naruto Perdendo o Controle!",
                video:
                  "https://drive.google.com/file/d/10KcBffAdOhN-EJrsU5g6MoiIhtrv1rCg/preview",
              },
              {
                numero: 17,
                titulo: "Passado Branco, Ambição Escondida",
                video:
                  "https://drive.google.com/file/d/10OvneMFVKVc13JKsySzyg-M1-5ZVCaXv/preview",
              },
              {
                numero: 18,
                titulo: "Uma Ferramenta Conhecida como Shinobi",
                video:
                  "https://drive.google.com/file/d/10Ll5T2gHR05ouZx7X2qFH14JvRJCW-RA/preview",
              },
              {
                numero: 19,
                titulo: "O Demônio na Neve",
                video:
                  "https://drive.google.com/file/d/10SVH2UGcfus6UQElsjlUPQJqlZRHNcwB/preview",
              },
              {
                numero: 20,
                titulo: "Um Novo Capítulo Começa: A Prova Chūnin",
                video:
                  "https://drive.google.com/file/d/10PwNoAKLJ45jmi753IF9BDStCOa4oYdF/preview",
              },
              {
                numero: 21,
                titulo: "Identifiquem-se: Rivais Novos e Poderosos",
                video:
                  "https://drive.google.com/file/d/10WgjAY8278fyNZvBDvMq0mkzoOn3AdkR/preview",
              },
              {
                numero: 22,
                titulo: "Rock Lee Contra Sasuke!",
                video:
                  "https://drive.google.com/file/d/10VrKR7QW9I3Bj-QlQYYIEGDx7MBfqoEK/preview",
              },
              {
                numero: 23,
                titulo: "A Batalha de Pré-Seleção: Todos Contra Todos!",
                video:
                  "https://drive.google.com/file/d/10gYXDdPxBcFKE32HZuwBIBBgJzp3qkst/preview",
              },
              {
                numero: 24,
                titulo: " Liguem os Motores: A Prova Chunin Começa! ",
                video:
                  "https://drive.google.com/file/d/10aQ6qEQhOEm32dofAncqDnW8kRP2yHiZ/preview",
              },
              {
                numero: 25,
                titulo: "A Décima Pergunta: Tudo ou Nada!",
                video:
                  "https://drive.google.com/file/d/10jRRpE0ZGOlUHjfjztagGpOecd1SCJXa/preview",
              },
              {
                numero: 26,
                titulo: "Reportagem Especial: Ao Vivo da Floresta...",
                video:
                  "https://drive.google.com/file/d/10h1Ml5awRHaj5_eH7LWV05FE-OI7c_dZ/preview",
              },
              {
                numero: 27,
                titulo: "Encare ou Fuja na Floresta da Morte",
                video:
                  "https://drive.google.com/file/d/10rGNCV8xcDNxCVlMmzcMj2EyZUrL_F-F/preview",
              },
              {
                numero: 28,
                titulo: "Comer ou Ser Comido: Pânico na Floresta",
                video:
                  "https://drive.google.com/file/d/10nTWrmy2VXA6EAfKwbizsGsxPpaN35Hp/preview",
              },
              {
                numero: 29,
                titulo: "Os Cinco de Konoha: Um Novo Time",
                video:
                  "https://drive.google.com/file/d/115MDiH4mwyZY-nykdw5H4RTUJ44zeHzN/preview",
              },
              {
                numero: 30,
                titulo: "A Técnica Proibida: O Selo do Ódio",
                video:
                  "https://drive.google.com/file/d/110pDUy-iuCirkKiWiQBrQKF1CrX1BmBU/preview",
              },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/QczGoCmX-pI",
        generos: ["ação", "aventura", "fantasia", "drama"],
        //ano: 2002
      },
      {
        id: 20,
        tipo: "movie",
        titulo: "Karatê Kid: Lendas",
        descricao:
          "Karatê Kid: Lendas é uma animação de ação e aventura onde jovens lutadores viajam pelo mundo para proteger relíquias místicas do karatê.",
        imagem: "imagens/karate.webp",
        video:
          "https://drive.google.com/file/d/105fzRrBUR4xgp3VT2ijOLDM-FHZm0flz/preview",
        trailer: "http://www.youtube.com/embed/jdZPKED0Dqg",
        generos: ["ação", "drama"],
        //ano: 2025
      },
      {
        id: 21,
        tipo: "movie",
        titulo: "Bird Box",
        descricao:
          "Bird Box mostra uma mãe e seus filhos tentando sobreviver vendados a criaturas que enlouquecem quem as vê.",
        imagem: "imagens/bird-box.webp",
        video:
          "https://drive.google.com/file/d/1-66Xx8Gdp9vHl8yko0SGivucY92dnL2o/preview",
        trailer: "https://www.youtube.com/embed/o2AsIXSh2xo",
        generos: ["terror", "drama"],
        //ano: 2018
      },
      {
        id: 22,
        tipo: "movie",
        titulo: "Tropa de Elite",
        descricao:
          "Um capitão do BOPE enfrenta a violência do tráfico e os dilemas morais da guerra urbana no Rio de Janeiro.",
        imagem: "imagens/tropa-de-elite.webp",
        video:
          "https://drive.google.com/file/d/118bEax43b4FWj5MZ38zZbXF_1zozmLaF/preview",
        trailer: "https://www.youtube.com/embed/uZBiNJQxtGw?si=-fO313EZbdesbqYG",
        generos: ["ação", "drama"],
        //ano: 2007
      },
      {
        id: 23,
        tipo: "movie",
        titulo: "Tropa de Elite 2",
        descricao:
          "Agora como subsecretário de segurança, Nascimento enfrenta a corrupção sistêmica do Estado enquanto lida com conflitos pessoais e políticos.",
        imagem: "imagens/tropa-de-elite-2.webp",
        video:
          "https://drive.google.com/file/d/15xR0cVYbGhlvYrKsfqKBI0X9BwSvNT6G/preview",
        trailer: "http://www.youtube.com/embed/O8YrtINB5oI",
        generos: ["ação", "drama"],
        //ano: 2012
      },
      {
        id: 24,
        tipo: "movie",
        titulo: "Django Livre",
        descricao:
          "Um ex-escravo se une a um caçador de recompensas para resgatar sua esposa das mãos de um cruel fazendeiro no sul dos EUA.",
        imagem: "imagens/django-livre.webp",
        video:
          "https://drive.google.com/file/d/1-3qCPO74VTnIKp6lVNmsiAo6kz3a_2Ye/preview",
        trailer: "http://www.youtube.com/embed/tivv135aGbc",
        generos: ["drama"],
        //ano: 2012
      },
      {
        id: 25,
        tipo: "movie",
        titulo: "As Branquelas",
        descricao:
          "Dois agentes do FBI se disfarçam de socialites brancas para investigar um plano de sequestro na alta sociedade.",
        imagem: "imagens/as-branquelas.webp",
        video:
          "https://drive.google.com/file/d/1-TBykD6eh9XpOSyGgA2HkhpefkbFHeQh/preview",
        trailer: "http://www.youtube.com/embed/seoJIPLLWp0",
        generos: ["comédia"],
        //ano: 2000
      },
      {
        id: 26,
        tipo: "movie",
        titulo: "Minha mãe é uma peça",
        descricao:
          "Minha Mãe é uma Peça é uma comédia brasileira que retrata, de forma engraçada e carinhosa, o dia a dia e as confusões da mãe dona de casa Dona Hermínia.",
        imagem: "imagens/minha_mae_e_uma_peca.webp",
        video:
          "https://drive.google.com/file/d/1-blRUvTBLWueam__7R7dr1XlZ_PKMQMZ/preview",
        trailer: "http://www.youtube.com/embed/HrST-4WLlbA",
        generos: ["comédia"],
        //ano: 2013
      },
      {
        id: 27,
        tipo: "movie",
        titulo: "Invocação do mal",
        descricao:
          "Invocação do Mal é um filme de terror baseado em eventos reais, onde investigadores paranormais ajudam uma família a enfrentar uma entidade maligna em sua casa.",
        imagem: "imagens/invocacao-do-mal.webp",
        video:
          "https://drive.google.com/file/d/12WbOj-0LIox8JSSmp9-e552FSKTGvfEn/preview",
        trailer: "http://www.youtube.com/embed/GQrrXceHn2E",
        generos: ["terror", "suspense", "drama"],
        //ano: 2013
      },
      {
        id: 28,
        tipo: "movie",
        titulo: "Velozes e Furiosos 7",
        descricao:
          "Dominic Toretto e sua equipe enfrentam um assassino implacável enquanto tentam proteger sua família e manter sua liberdade.",
        imagem: "imagens/velozes-e-furiosos-7.webp",
        video:
          "https://drive.google.com/file/d/12rb55ROxXXRUOFRZWqTszoRmVZh12EnU/preview",
        trailer: "http://www.youtube.com/embed/hujU0dw6Erk",
        generos: ["ação", "crime", "suspense"],
        //ano: 2015
      },
      {
        id: 29,
        tipo: "movie",
        titulo: "A barraca do beijo",
        descricao:
          "Um romance adolescente cheio de confusões, paixões e desafios entre amizade e amor.",
        imagem: "imagens/barraca do beijo.webp",
        video:
          "https://drive.google.com/file/d/10eof651eVsyyVcfEFQArNYG9wHwTTFqg/preview",
        trailer: "http://www.youtube.com/embed/QIalE8-E990",
        generos: ["romance", "comédia", "drama"],
        //ano: 2018
      },
      {
        id: 30,
        tipo: "movie",
        titulo: "Carros",
        descricao:
          "Carros é uma animação que mostra um carro de corrida aprendendo sobre amizade e humildade em uma cidade do interior.",
        imagem: "imagens/carros.webp",
        video:
          "https://drive.google.com/file/d/12jtCo0mzpa7GyxnvnziMJCqQC3Q5Q4Y6/preview",
        trailer: "http://www.youtube.com/embed/0I1x9ew1OZU",
        generos: ["animação", "família", "aventura"],
        //ano: 2006
      },
      {
        id: 31,
        tipo: "series",
        titulo: "Neymar: O Caos Perfeito",
        descricao:
          "Neymar: O Caos Perfeito é uma minissérie documental da Netflix que explora a vida, carreira e controvérsias do astro do futebol Neymar Jr., revelando os bastidores de sua fama e as pressões dentro e fora de campo.",
        imagem: "imagens/neymar.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "Juninho", video: "https://drive.google.com/file/d/1-iQeU9AiHZbZJgNYBHKPGWXIXEvLo7lX/preview",},
              { numero: 2, titulo: "Neymar do Brasil", video:"https://drive.google.com/file/d/1-g_9STHkrOaVLSQa2YQwHSd0D_wYXNt3/preview"},
              { numero: 3, titulo: "O Pai tá on", video: "https://drive.google.com/file/d/1-fYrk85GUFDxucnZi6bEVpY39GfeIDIm/preview"},     
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/HSC6htNW9co",
        generos: ["documentário"],
        //ano: 2022
      },
      {
        id: 32,
        tipo: "series",
        titulo: "Apenas um Show",
        descricao:
          "Mordecai e Rigby, um gaio-azul e um guaxinim, trabalham em um parque e vivem situações absurdas e hilárias ao tentar evitar o tédio.",
        imagem: "imagens/apenas-um-show.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "A força", video: "https://drive.google.com/file/d/12AClvjU6MTHkRgmiXSYr5Klibk-M59Sm/preview" },
              { numero: 2, titulo: "Apenas arrume as cadeiras", video: "https://drive.google.com/file/d/12Dk5IaZ1FHHMUOxBiISewUT1SoXwXDsb/preview" },
              { numero: 3, titulo: "Ingressos para um show cafeinado", video: "https://drive.google.com/file/d/12LTl21UtE851cYdK2oFGUa15Z_bDv36F/preview" },
              { numero: 4, titulo: "Socos mortais", video: "https://drive.google.com/file/d/12JXD3L9NFkKt0q0gKoUkYrZeb08lMjmg/preview" },
              { numero: 5, titulo: "Bolos de graça", video: "https://drive.google.com/file/d/12UGgWf_e_f-FJtPJlJnC8-9A0RYPr95U/preview" },
              { numero: 6, titulo: "O churrasco", video: "https://drive.google.com/file/d/12P-0g3cp8JhhSxG5ORqKJC7g2II7PDWd/preview" },
              { numero: 7, titulo: "Quiejo quente de luxos", video: "https://drive.google.com/file/d/12cHebeglw0NKjF5xol1n8N-tiB8BD1sy/preview" },
              { numero: 8, titulo: "Vão embora unicórnios", video: "https://drive.google.com/file/d/12_dh69Tpido5OP_IyyphxwOeoB_5qICc/preview" },
              { numero: 9, titulo: "Passando um trote", video: "https://drive.google.com/file/d/12fcIyQhuwLmmznZ4Muxseoc6zwQSrlnm/preview" },
              { numero: 10, titulo: "Dom", video: "https://drive.google.com/file/d/123asiwsfalqFA68bTr0Tf12qMB6_8EQT/preview" },
              { numero: 11, titulo: "O corpo de Rigby", video: "https://drive.google.com/file/d/124PzIEm85kknBkX-1-CwkWUMMJBzO8pL/preview" },
              { numero: 12, titulo: "Mordecai e os Rigbys", video: "https://drive.google.com/file/d/12FjoVu1cBVjoh1RCNnUAW8FlE5LLD14R/preview" },
            ],
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "Olá Senhor", video: "https://drive.google.com/file/d/10D_e62xcMy6SUvlWaj6PuQbMxhCA-DAS/preview" },
              { numero: 2, titulo: "Tá na hora", video: "https://drive.google.com/file/d/10doPKJbLNRUS7wJFQl25nNH5Jtj3BeaZ/preview" },
              { numero: 3, titulo: "Dia de reconhecimento", video: "https://drive.google.com/file/d/11XIZmOis-9tB0oOQ35dRJqO0K99TdaBR/preview" },
              { numero: 4, titulo: "Espiada", video: "https://drive.google.com/file/d/11THujaRXTGzGO0vXBW7cb64tVydnwzcf/preview" },
              { numero: 5, titulo: "Tonto", video: "https://drive.google.com/file/d/11mzGonu6R1QYdaukkM1MtQUL2YBr0naj/preview" },
              { numero: 6, titulo: "Minha mãe", video: "https://drive.google.com/file/d/11mKHdQwd7qsS22lPu0z_Mfb2PEw2yN5s/preview?" },
              { numero: 7, titulo: "Pontuação máxima", video: "https://drive.google.com/file/d/124OoGl7pYAeavYpUMneYtqUsc9WZ4sb7/preview" },
              { numero: 8, titulo: "Ódio contra a televisão", video: "https://drive.google.com/file/d/11qot3xPIWAkEEGyO_f65q4dnrxK1m9gG/preview" },
              { numero: 9, titulo: "Pete festeiro", video: "https://drive.google.com/file/d/128HA1DUERr8_IYsFSSM-FpuKZdAqFS6s/preview" },
              { numero: 10, titulo: "Lavagem cerebral", video: "https://drive.google.com/file/d/10A_Vfgdn2lBRwlJWYa-xV4baWafPMfYr/preview" },
              { numero: 11, titulo: "Benson se foi", video: "https://drive.google.com/file/d/10CyYaZ4JyFVsJR-4cK2N0l1Zf0D1HHVW/preview" },
              { numero: 12, titulo: "Mas eu tenho um recibo", video: "https://drive.google.com/file/d/10OlomSQsu1xz3xCFDYpS8nMYB4i4NcJm/preview" },
              { numero: 13, titulo: "Está é minha música", video: "https://drive.google.com/file/d/10V2ZDsDODs79GEqakxMChM_2SEZC16bj/preview" },
              { numero: 14, titulo: "Musculosa", video: "https://drive.google.com/file/d/10MPJ4E8nkoVYbPj7RjIFjzJuib2qKIBD/preview" },
              { numero: 15, titulo: "Trabalhador temporário", video: "https://drive.google.com/file/d/10QJrL2U8ZkGb2CG-yTnvge3lkzzjfZXq/preview" },
              { numero: 16, titulo: "Sorte minha", video: "https://drive.google.com/file/d/10cNMqlHaxui6ESPBnP1k4zEVCrZnxZbX/preview" },
              { numero: 17, titulo: "A gente se vê lá", video: "https://drive.google.com/file/d/10klotGtc_Ve1AgQ3C2DaAK5lpVDrv_9c/preview" },
              { numero: 18, titulo: "Me faça um favor", video: "https://drive.google.com/file/d/10Zyf6Vp19pvmBvhMHlug5ScOgnSOtkeH/preview" },
              { numero: 19, titulo: "No cemitério", video: "https://drive.google.com/file/d/10nZ_05ibm3OlXuqP3-58KJaBcb6UQ1Km/preview" },
              { numero: 20, titulo: "Luta de verdade mesmo", video: "https://drive.google.com/file/d/11-1nXiaIDZRPl_8mAL5Y0ukVVYri0QUC/preview" },
              { numero: 21, titulo: "Lá no topo", video: "https://drive.google.com/file/d/10qMDfntT5NPK7ARV8pkysWNefL7CY0It/preview" },
              { numero: 22, titulo: "A coruja noturna", video: "https://drive.google.com/file/d/117Fzlnpn0ihlvdGDrgV422hnE3D4sqER/preview" },
              { numero: 23, titulo: "Um monte de patinhos", video: "https://drive.google.com/file/d/11368jfwHwxaf8Wh18tDvG9NkQRogEPqj/preview" },
              { numero: 24, titulo: "Maior esperto", video: "https://drive.google.com/file/d/11P6zRfaoVLMtkj2MKsbEUejGijibRxXH/preview" },
              { numero: 25, titulo: "Primeiro dia", video: "https://drive.google.com/file/d/11Utl2JvcW--uoxlr4LgQu7u0DHgWdGm3/preview" },
              { numero: 26, titulo: "Olha o vírus", video: "https://drive.google.com/file/d/11FQfWCUcqjgFSesKBYzjcFqJ2UmQini0/preview" },
              { numero: 27, titulo: "Fedorento", video: "https://drive.google.com/file/d/11h8sKVM2ssqosqZy8ZX1E25Og1DQGNzt/preview" },
              { numero: 28, titulo: "Vídeo de karaokê", video: "https://drive.google.com/file/d/10mSMZxlkihlWyrX6BHK5v9D_-DaqQBxg/preview" },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/FhKIg8O4AWI",
        generos: ["animação", "comédia"],
        //ano: 2010
      },
      {
        id: 33,
        tipo: "movie",
        titulo: "Venom",
        descricao:
          "Venom é um filme de super-herói baseado no personagem da Marvel, onde um jornalista se torna hospedeiro de uma entidade alienígena que lhe concede habilidades sobre-humanas.",
        imagem: "imagens/venom.webp",
        video:
          "https://drive.google.com/file/d/12_FvHrwNab6aGst9ZJhe0FfdXZYg3sj3/preview",
        trailer: "http://www.youtube.com/embed/EQxCycVTfcU",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2018
      },
      {
        id: 34,
        tipo: "movie",
        titulo: "Homem-Aranha",
        descricao:
          "Homem-Aranha é um filme de super-herói baseado no personagem da Marvel, onde um jovem ganha poderes aracnídeos e luta contra o crime em Nova York.",
        imagem: "imagens/homem-aranha.webp",
        video:
          "https://drive.google.com/file/d/12fVQTTsBcLfzD9sSfYwLt4K0637Kv_yQ/preview",
        trailer: "http://www.youtube.com/embed/t06RUxPbp_c",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2002
      },
      {
        id: 35,
        tipo: "movie",
        titulo: "Homem de Ferro",
        descricao:
          "Um bilionário genial constrói uma armadura tecnológica para combater o crime e se torna o super-herói Homem de Ferro.",
        imagem: "imagens/homem-de-ferro.webp",
        video:
          "https://drive.google.com/file/d/114PKPFMzO3b60z5GYmP4gxFCpJEuBZU6/preview",
        trailer: "http://www.youtube.com/embed/aKkud2sqd1o",
        generos: ["ação", "ficção científica", "aventura"],
        //ano: 2008
      },
      {
        id: 36,
        tipo: "movie",
        titulo: "Homem de Ferro 2",
        descricao:
          "Tony Stark enfrenta novos desafios enquanto lida com a revelação de sua identidade como Homem de Ferro e a ameaça de novos vilões.",
        imagem: "imagens/homem-de-ferro2.webp",
        video:
          "https://drive.google.com/file/d/12OTkCl2voTyR2QlX8ahLEIX1JJWQu0B-/preview",
        trailer: "http://www.youtube.com/embed/msxQMX9Nczk",
        generos: ["ação", "ficção científica", "aventura"],
        //ano: 2010
      },
      {
        id: 37,
        tipo: "movie",
        titulo: "Homem de Ferro 3",
        descricao:
          "Tony Stark enfrenta um novo inimigo que ameaça sua vida e seu legado como Homem de Ferro.",
        imagem: "imagens/homem-de-ferro3.webp",
        video:
          "https://drive.google.com/file/d/12qkBmYa7iSeQTOSLSKb01olr37Kho_rA/preview",
        trailer: "http://www.youtube.com/embed/igfXmU1r_mc",
        generos: ["ação", "ficção científica", "aventura"],
        //ano: 2013
      },
      {
        id: 38,
        tipo: "movie",
        titulo: "bob esponja: o incrivel resgate",
        descricao:
          "Bob Esponja embarca em uma missão épica com Patrick para resgatar Gary, seu caracol de estimação, que foi raptado.",
        imagem: "imagens/bob-esponja-o-incrivel-resgate.webp",
        video:
          "https://drive.google.com/file/d/11U-Zph27pOvblj5teKZy9hXYKbjMlRCV/preview",
        trailer: "https://www.youtube.com/embed/LcC-jBJRzXg",
        generos: ["animação", "aventura", "comédia"],
        //ano: 2020
      },
      {
        id: 39,
        tipo: "movie",
        titulo: "Travis Scott: Voando Alto - Legendado",
        descricao:
          "O documentário Travis Scott: Look Mom I Can Fly mostra os bastidores da ascensão meteórica do rapper enquanto ele lança o álbum Astroworld e conecta sua arte com a vida pessoal e fãs.",
        imagem: "imagens/travis.webp",
        video:
          "https://drive.google.com/file/d/10-oFWROvaB7Wpq4DvnzrLHaMEZ_cfx46/preview",
        trailer: "http://www.youtube.com/embed/CpR3rI_rjtg",
        generos: ["documentário"],
        //ano: 2019
      },
    ];
