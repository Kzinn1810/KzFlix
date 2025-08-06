const dados = [
      {
        id: 1,
        tipo: "movie",
        titulo: "Pecadores",
        descricao:  "Um terror gótico e musical ambientado no sul dos EUA nos anos 1930, onde vampiros racistas enfrentam músicos negros em uma batalha por alma, cultura e sobrevivência.",
        imagem: "imagens/pecadores.webp",
        video: "https://drive.google.com/file/d/1-VvLUBMOAhIjrcJiB2_ileQxgTKKbZvM/preview",
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
              { numero: 1, titulo: "Luz Vermelha, Luz Verde", video: "https://drive.google.com/file/d/1plAblGZJOYvfpaUkiOvZRS965JuDATPt/preview" },
              { numero: 2, titulo: "Inferno", video: "https://drive.google.com/file/d/165hBLBc7qJetgp3d7NFquYSrdFKE4OL1/preview" },
              { numero: 3, titulo: "O Homem do Guarda-Chuva", video: "https://drive.google.com/file/d/168-iztih5KB9JZzFyld_IWRe3iRmKqko/preview" },
              { numero: 4, titulo: "Permaneçam Juntos", video: "https://drive.google.com/file/d/168Be9u375lh8o3d7BzHpbIBIxOIG0jnB/preview" },
              { numero: 5, titulo: "Um Mundo Justo", video: "https://drive.google.com/file/d/16CT1-nbETzJOVLP-DeaMb34I_aG3Twwm/preview" },
              { numero: 6, titulo: "Bolinhas", video: "https://drive.google.com/file/d/16GIMa-7v50JOtvtwwdzYrVeUh0WFHjcG/preview" },
              { numero: 7, titulo: "VIPs", video: "https://drive.google.com/file/d/16LQCb7Xi71vHFMAy0M8XV3AkaH95vhL4/preview" },
              { numero: 8, titulo: "O Homem de Máscara", video: "https://drive.google.com/file/d/16XTerbnW_3CfiGx-26wHHjc_iBnzTV5x/preview" },
              { numero: 9, titulo: "Um Dia de Sorte", video: "https://drive.google.com/file/d/16_m0OF95EcGnL0d7f2lTPuJoNZe8VYaj/preview" }
            ]
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "Pão e loteria", video: "https://drive.google.com/file/d/1-DEqWPiCH3Fa5huZ16NJkyImXIKn0mn3/preview" },
              { numero: 2, titulo: "Festa de Halloween", video: "https://drive.google.com/file/d/1-DMqFIOWMjJ7clzxX9GIeh2bM6Ye5b_h/preview" },
              { numero: 3, titulo: "001", video: "https://drive.google.com/file/d/1-EjrF5YGVmS-Zpf6cHALTaX0CfdfTX7Z/preview" },
              { numero: 4, titulo: "Seis pernas", video: "https://drive.google.com/file/d/1-GAx5WoRSLbrRsWiinGQqsQX5EaZB4Gq/preview" },
              { numero: 5, titulo: "Mais um jogo", video: "https://drive.google.com/file/d/1-HB2yLA2bLHVi4Xm2Gkg47o7Rxw3SlVj/preview" },
              { numero: 6, titulo: "0 X", video: "https://drive.google.com/file/d/1-HSSIvXIpUCgRAHROjuevSwkur66OH0t/preview" },
              { numero: 7, titulo: "Amigos ou inimigos?", video: "https://drive.google.com/file/d/1-JolDVAyIfwVmg3BJEgosKImdu8ByIi-/preview" }
            ]
          },
          {
            numero: 3,
            episodios: [
              { numero: 1, titulo: "Chaves e facas", video: "https://drive.google.com/file/d/1-MCw1KdTiRNvO8KB5n9-L7doK5WqWKCE/preview" },
              { numero: 2, titulo: "Noite estrelada", video: "https://drive.google.com/file/d/1-N9vW1aFWCzFuOY5FQ7IeNCTAEhhNTwB/preview" },
              { numero: 3, titulo: "Não é culpa sua", video: "https://drive.google.com/file/d/1-QF6s40AIBTBzt0AoQfoypii8bPw39Mp/preview" },
              { numero: 4, titulo: "222", video: "https://drive.google.com/file/d/1-TJ3aoQt6OTHSpoUmTX_b0Nyc7gC3Sse/preview" },
              { numero: 5, titulo: "○△□", video: "https://drive.google.com/file/d/1-TU3MzisTGl7C54Pr_iY0OSvlkZBDSyh/preview" },
              { numero: 6, titulo: "Humanos", video: "https://drive.google.com/file/d/1-ajNJxcGW27vaOlSzSwnahqVo42fCIBK/preview" }
            ]
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
              { numero: 1, titulo: "Segredos", video: "https://drive.google.com/file/d/102SGUVg5piDjkOlpltoJSq-PPT_tKcrr/preview" },
              { numero: 2, titulo: "Mentirosos", video: "https://drive.google.com/file/d/104eAEVzIUMs4xtDwaKDE35AYthP01pjt/preview" },
              { numero: 3, titulo: "Passado e Presente", video: "https://drive.google.com/file/d/108LI4kH1oJVoplLU8vx5iVMXG2puMM_M/preview" },
              { numero: 4, titulo: "Duplo Viver", video: "https://drive.google.com/file/d/10k_HhWtTJ1_nYXbpKmrhTR2mbyOToauH/preview" },
              { numero: 5, titulo: "A Verdade", video: "https://drive.google.com/file/d/10nPKhRbXzqh_Kv7meNCslhNPITGc1zAI/preview" },
              { numero: 6, titulo: "Tudo é Agora", video: "https://drive.google.com/file/d/10osbuXXwzZs8EYRFd6RwBzRtOOhjqsHv/preview" },
              { numero: 7, titulo: "Entre o Tempo", video: "https://drive.google.com/file/d/10pDzGPRNOCb-uT53gYExJCRTUsFUXBrZ/preview" },
              { numero: 8, titulo: "O Que Se Semear, Se Colhe", video: "https://drive.google.com/file/d/10yKIyqfod3BRWLVUX01LxhOoEc5cPiLr/preview" },
              { numero: 9, titulo: "Tudo se Repete", video: "https://drive.google.com/file/d/112IqZoerm3kild7cycx8oETtsLc7PBqj/preview" },
              { numero: 10, titulo: "Alfa e Ômega", video: "https://drive.google.com/file/d/116XWWWdSb0E7YiWtqXGyJPWFIFf10R74/preview" },
            ],
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "Inícios e Finais", video: "https://drive.google.com/file/d/12GjEt9WnO_-EElEEUsNxOHh_jKMGzCw9/preview" },
              { numero: 2, titulo: "Matéria Escura", video: "https://drive.google.com/file/d/12HKYJuLo5n_-yd6Fg1Za3wEoU8DZe2b7/preview" },
              { numero: 3, titulo: "Fantasmas", video: "https://drive.google.com/file/d/12NDcmKioXYfZXiRkHNCIvZqEmbz9UbFR/preview" },
              { numero: 4, titulo: "Os Viajantes", video: "https://drive.google.com/file/d/12RSAcGC5uevwS6ikbP3nEgRC9blvOBpf/previewk" },
              { numero: 5, titulo: "Achados e Perdidos", video: "https://drive.google.com/file/d/12QBmx839BUZstX2iVDP_WNThA4j8_Kfw/preview" },
              { numero: 6, titulo: "Um Ciclo Sem Fim", video: "https://drive.google.com/file/d/12ckZ65-wSsxLPFu_LPC-bs2km6WdeOgF/preview" },
              { numero: 7, titulo: "O Diabo Branco", video: "https://drive.google.com/file/d/12a3xVaT2iJea0PZAFezebFK92RGuPaXI/preview" },
              { numero: 8, titulo: "Finais e Inícios", video: "https://drive.google.com/file/d/12ccFTaTIQAI5g0YAi3gHgFAkhjyICpcD/preview" },
            ],
          },
          {
            numero: 3,
            episodios: [
              { numero: 1, titulo: "Deja-vu", video: "https://drive.google.com/file/d/1-C6AvI4SBesH_47eVL4_G7Pl9ATY94Mh/preview" },
              { numero: 2, titulo: "Os Sobreviventes", video: "https://drive.google.com/file/d/1-J8ffOln6uk10gyGzm_KXIPNd2MPQntQ/preview" },
              { numero: 3, titulo: "Adão e Eva", video: "https://drive.google.com/file/d/1-K1JRMPOkxqVZ5ldNlQPO-bErCpqoxs8/preview" },
              { numero: 4, titulo: "A Origem", video: "https://drive.google.com/file/d/1-HE4B9cVybxrS2lhTmcYCnX96aCe1WN-/preview" },
              { numero: 5, titulo: "Vida e Morte", video: "https://drive.google.com/file/d/1mLnJPtzDwfs1SSLiUoLwjjWbMPEorL6-/preview" },
              { numero: 6, titulo: "Luz e Sombra", video: "https://drive.google.com/file/d/1-UFyVqiTbZ0w61lvC2qigftrit3FQRCg/preview" },
              { numero: 7, titulo: "Entre o Tempo", video: "https://drive.google.com/file/d/1ywPI8JgybfN8iRZqVDtnV3kPe9mmOn-D/preview" },
              { numero: 8, titulo: "O Paraíso", video: "https://drive.google.com/file/d/1-RYxpvU_GHbt9sBMTMWvK-C7G_ruktiP/preview" },
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
        titulo: "Outer Banks",
        descricao:
          "Outer Banks é uma série de aventura e mistério que segue um grupo de adolescentes em busca de um tesouro perdido, enquanto enfrentam rivalidades e segredos na costa da Carolina do Norte.",
        imagem: "imagens/outer-banks.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "O Forte", video: "https://drive.google.com/file/d/1p6fJZt_R1c8Q8FwFvDaL5h8wJ5d7YnIc/preview" },
              { numero: 2, titulo: "O Sortudo", video: "https://drive.google.com/file/d/14zvWLGd4wXTnhZbDavcGyTU--KzLU23p/preview" },
              { numero: 3, titulo: "A Toca", video: "https://drive.google.com/file/d/1o457Xs20TG_Ob12PMuBcJR5y2ad_af7W/preview" },
              { numero: 4, titulo: "Esqueletos", video: "https://drive.google.com/file/d/1lpKh1CNIg4Ex6t3OkkQeudz0iKOpWWxW/preview" },
              { numero: 5, titulo: "O Sino", video: "https://drive.google.com/file/d/10pQfhnubEuGvRRMleEYR1PiPdLX0-RxY/preview" },
              { numero: 6, titulo: "Parada obrigatória", video: "https://drive.google.com/file/d/1kZLAwg3HG7tef91oO-D34UmVVUmwwUYQ/preview" },
              { numero: 7, titulo: "Praia livre", video: "https://drive.google.com/file/d/1tLVVpOk8jp_tQEdJo6fKJ2Rj5bFM1qdL/preview" },
              { numero: 8, titulo: "O Fugitivo", video: "https://drive.google.com/file/d/1vW-pByZXosr_Sare4ZxP-4soNZdzz8at/preview" },
              { numero: 9, titulo: "O Despertar", video: "https://drive.google.com/file/d/1ojWmH_FgE4z0Zn46zHHAoRpoz6s7Uy2t/preview" },
              { numero: 10, titulo: "O Fantasma", video: "https://drive.google.com/file/d/1oXLutqi1O2zRy-8zoSUgULladHS0KgDj/preview" },
            ],
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "O Ouro", video: "https://drive.google.com/file/d/1kjA22jzWgojgibw9y2LozbLPTmRdipqh/preview" },
              { numero: 2, titulo: "O Relógio", video: "https://drive.google.com/file/d/1gwisRjCjJPH0ufSbvobRkeKuhy8hws_e/preview" },
              { numero: 3, titulo: "Prisioneiros", video: "https://drive.google.com/file/d/1YVQK4qFFJRgMVwJCB-Zq2MG-Thx8kv3u/preview" },
              { numero: 4, titulo: "Casa", video: "https://drive.google.com/file/d/1fq0LotsmWUOIun1qoA64y9mSui0EFrnx/preview" },
              { numero: 5, titulo: "A Trilha", video: "https://drive.google.com/file/d/1oph8EjanssPLAOlXm-hp_MkrkNIIByHe/preview" },
              { numero: 6, titulo: "Minha Druthers", video: "https://drive.google.com/file/d/1eCfqq2lf03vxSFzHpOiul7tv8ITyu6zx/preview" },
              { numero: 7, titulo: "O Paraíso na Terra", video: "https://drive.google.com/file/d/1mHK9pD_fNSf2kfOzy8z4wBSwcFnxTXgf/preview" },
              { numero: 8, titulo: "O Desafio", video: "https://drive.google.com/file/d/1Hyn-vPWm8ZG5vrhFnCW77F8t82kmzNPd/preview" },
              { numero: 9, titulo: "Trilha do Inferno", video: "https://drive.google.com/file/d/1JFlgfKjqwCBfGxp-UD2KsEie_UGAuPjL/preview" },
              { numero: 10, titulo: "O Cofre", video: "https://drive.google.com/file/d/1NUe6JipeHfMizk-PK1dxmD38m0t7d4N9/preview" },
            ],
          },
          {
            numero: 3,
            episodios: [
              { numero: 1, titulo: "Apagados", video: "https://drive.google.com/file/d/1-FyKwY8neZDC5dfFTI95w4BRaBnHRsP9/preview" },
              { numero: 2, titulo: "O Tesouro", video: "https://drive.google.com/file/d/1eCe7Xb40YEdmdn_K671tudBfXhrFzYj5/preview" },
              { numero: 3, titulo: "Pai e Filho", video: "https://drive.google.com/file/d/1tcL45tIEh5L3QH7d1TICzZgbmtqMJ9IE/preview" },
              { numero: 4, titulo: "O Diário", video: "https://drive.google.com/file/d/1gld-zGQ5-Xo7HobvMLQ2f0dreDUvTHBd/preview" },
              { numero: 5, titulo: "Império de Papel", video: "https://drive.google.com/file/d/1XTrRCDL8x13dHyaK87sG-mISJsdKKtK-/preview" },
              { numero: 6, titulo: "O Viaduto", video: "https://drive.google.com/file/d/1iccGG332vpS_tJ__4M7zXqt2x28eiUwS/preview" },
              { numero: 7, titulo: "Feliz Aniversário", video: "https://drive.google.com/file/d/1_CHhq0vMFtfke5_TFe0YWrPZY3Aqlq7V/preview" },
              { numero: 8, titulo: "O Túnel", video: "https://drive.google.com/file/d/1NNSF4DHv1Xyrnn7avWEpPtyntQ4hS38n/preview" },
              { numero: 9, titulo: "O Jovem e a Cruz", video: "https://drive.google.com/file/d/11gyYCZxkpqaUQM9olUn09MqiLikx5HQG/preview" },
              { numero: 10, titulo: "O Santuário", video: "https://drive.google.com/file/d/1rHn1suzvZP8MOHB6Ox-CqjaMwCszJoHX/preview" },
            ],
          },
          {
            numero: 4,
            episodios: [
              { numero: 1, titulo: "O Enduro", video: "https://drive.google.com/file/d/1OxroQBsuXv0x5Vr4yLPzTzO9TDMa4UWT/preview" },
              { numero: 2, titulo: "Barba Negra", video: "https://drive.google.com/file/d/1Reyl-qosierbilfvE3gofoOw1yPsYuv6/preview" },
              { numero: 3, titulo: "Os Corsários Lupinos", video: "https://drive.google.com/file/d/1YNj6AEBMaA4I8KQ8tE4QC754FjT0I8sa/preview" },
              { numero: 4, titulo: "A ondulação", video: "https://drive.google.com/file/d/1e9llZeGYYFNOSHxWqh8rO647KC6oImfJ/preview" },
              { numero: 5, titulo: "Albatroz", video: "https://drive.google.com/file/d/1dacFJ9Y_HlijHodr3plfI2f2xc7RDLbC/preview" },
              { numero: 6, titulo: "O Conselho Municipal", video: "https://drive.google.com/file/d/1YQ_xXkBOeyXUJ3oDMQk9S8KuHUx5l6_r/preview" },
              { numero: 7, titulo: "Mães e Pais", video: "https://drive.google.com/file/d/1-WBH-nZmyXLn58AWf21GjMAJQQvqAGSS/preview" },
              { numero: 8, titulo: "Dia da Decisão", video: "https://drive.google.com/file/d/1Xk6dz1zpGLvPv87Bw-XzEp2WQUsddu2T/preview" },
              { numero: 9, titulo: "A tempestade", video: "https://drive.google.com/file/d/1qftTfaBp7oPkndeTjjekXOZygFZ1h7mM/preview" },
              { numero: 10, titulo: "A Coroa Azul", video: "https://drive.google.com/file/d/1Y_5unmPNPjm39sVkfhd6pTPVoV4JlON2/preview" },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/uk_hFfUFXh4",
        generos: ["aventura", "mistério", "drama"],
        //ano: 2020
      },
      {
        id: 11,
        tipo: "movie",
        titulo: "Como Treinar o Seu Dragão",
        descricao:
          "Como Treinar o Seu Dragão é uma animação que conta a história de um jovem viking chamado Soluço, que se torna amigo de um dragão chamado Banguela, desafiando as tradições de sua tribo.",
        imagem: "imagens/como-treinar-seu-dragao.webp",
        video: "https://drive.google.com/file/d/12L_3Y_Pi7j-j5-xtXAQJqtbVVigPFxDb/preview",
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
        tipo: "series",
        titulo: "Dexter: Ressurreição",
        descricao:
          "Dexter: Ressurreição é um filme de terror psicológico que segue Dexter Morgan, um analista forense que luta contra seus instintos assassinos enquanto tenta reconstruir sua vida após os eventos traumáticos do passado.",
        imagem: "imagens/dexter-ressureicao.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "Um Coração Batendo...", video: "https://drive.google.com/file/d/1n_KF_3IwhOSqJX4ZheoCLFCnaBv_NJP3/preview" },
              { numero: 2, titulo: "Medo de Câmeras", video: "https://drive.google.com/file/d/1RE62jPRqBjrMVTarXa5t8rYDrfP5WPiE/preview" },
              { numero: 3, titulo: "Co-piloto Mandão", video: "https://drive.google.com/file/d/1j7svKGuhtArHx5byYJ6EFDNKW7vhUd-c/preview" },
              { numero: 4, titulo: "Me Chame de Vermelho", video: "https://drive.google.com/file/d/1T0K_pjCeVfqxCCjDyo5ksg0GiZx8tRe8/preview" },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/ngUBfp7yDeE",
        generos: ["terror", "suspense", "drama"],
        //ano: 2025
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
              { numero: 1, titulo: "Episódio 1", video: "https://drive.google.com/file/d/10ZIxNHqhSdbKp7mJFamiAWGkeNZl8p3s/preview" },
              { numero: 2, titulo: "Episódio 2", video: "https://drive.google.com/file/d/10ciVj2-RbFI5xULfu_tQZaUc0w48Q1kP/preview" },
              { numero: 3, titulo: "Episódio 3", video: "https://drive.google.com/file/d/10g70JssxI7WoejbCvGTOma7uu7kUnC1S/preview" },
              { numero: 4, titulo: "Episódio 4", video: "https://drive.google.com/file/d/10k9oMnbiOhlbmLeQ9m_1ij1rtep6m2qi/preview" },
              { numero: 5, titulo: "Episódio 5", video: "https://drive.google.com/file/d/10hW1dZWsPF1nnf9S4yt1EBonWyLe9vjo/preview" },
              { numero: 6, titulo: "Episódio 6", video: "https://drive.google.com/file/d/10oajxjCmyfNEtU6t0FFalRms5-qVV-eX/preview" },
              { numero: 7, titulo: "Episódio 7", video: "https://drive.google.com/file/d/10tyGsirAVWaSRMKLVs0thQWA0pbiYK5T/preview" },
              { numero: 8, titulo: "Episódio 8", video: "https://drive.google.com/file/d/10v1ph-TFvxkJAtxNI2UY3mypRV18ZTWr/preview" },
              { numero: 9, titulo: "Episódio 9", video: "https://drive.google.com/file/d/10xE37UnHbVdMmNlu2J_nhBStSF6hTpqf/preview" },
              { numero: 10, titulo: "Episódio 10", video: "https://drive.google.com/file/d/10tW8ZfaTKH8UaCjd6_FxhSq6Mwx4ydO7/preview" },
            ],
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "Episódio 1", video: "https://drive.google.com/file/d/111T8hjHpvuFuzl7FvcQzzpN_ADw9LqFR/preview" },
              { numero: 2, titulo: "Episódio 2", video: "https://drive.google.com/file/d/11ATZNJwa6efdNl4tEJc8dJa27JKPS5S1/preview" },
              { numero: 3, titulo: "Episódio 3", video: "https://drive.google.com/file/d/11BqdnXcDJh10_l_-w7cgEz6K6311xlOP/preview" },
              { numero: 4, titulo: "Episódio 4", video: "https://drive.google.com/file/d/11GHs9sGPctcIx_gZOUB0kP--bPPH_R4t/preview" },
              { numero: 5, titulo: "Episódio 5", video: "https://drive.google.com/file/d/11CzLm67dj0J_0ghpLWl2gxbFLBu176lp/preview" },
              { numero: 6, titulo: "Episódio 6", video: "https://drive.google.com/file/d/11MirhSiVgzTuCvyN2DCOI-LL-UMi6-7U/preview" },
              { numero: 7, titulo: "Episódio 7", video: "https://drive.google.com/file/d/11Icl9mCIG0sx_9tQf6zuhwdAr0n-jPg0/preview" },
              { numero: 8, titulo: "Episódio 8", video: "https://drive.google.com/file/d/11W2eQ9DJKDc0Nv1TZ4wzrab-OhNV3j0Z/preview" },
              { numero: 9, titulo: "Episódio 9", video: "https://drive.google.com/file/d/11NEeygSCvzXebhjV5_5_U6Pma9Q6kAhc/preview" },
              { numero: 10, titulo: "Episódio 10", video: "https://drive.google.com/file/d/114w8HMsPWM-sMmaNyeWBKEhfC0R0JO-T/preview" },
            ],
          },
          {
            numero: 3,
            episodios: [
              { numero: 1, titulo: "Episódio 1", video: "https://drive.google.com/file/d/11rMhXME0AovuhPRWb4Fkn3FJF0iaJJek/preview" },
              { numero: 2, titulo: "Episódio 2", video: "https://drive.google.com/file/d/12BIm4dn0j7zbH5UgEjUx8Kf7Y9Vm7s_X/preview" },
              { numero: 3, titulo: "Episódio 3", video: "https://drive.google.com/file/d/11omMHTqCBRMdZnk5phvf1fRivHqTtx4l/preview" },
              { numero: 4, titulo: "Episódio 4", video: "https://drive.google.com/file/d/11rZyvKKG2U9XeGTwm6K88RJrW20q89eX/preview" },
              { numero: 5, titulo: "Episódio 5", video: "https://drive.google.com/file/d/11wBQ-OhG2sBe55-aMl-UbSE321tOkuLI/preview" },
              { numero: 6, titulo: "Episódio 6", video: "https://drive.google.com/file/d/11xXsWxi5sZj2qhvx360pDZmlFN0dfcZX/preview" },
              { numero: 7, titulo: "Episódio 7", video: "https://drive.google.com/file/d/121KPwJ0Rqwvd227OQHwutlJTwtGtYZJF/preview" },
              { numero: 8, titulo: "Episódio 8", video: "https://drive.google.com/file/d/12BaZrWoYpwf97Q_TReS_0CbHNJiplvgT/preview" },
              { numero: 9, titulo: "Episódio 9", video: "https://drive.google.com/file/d/12Dt8MnyYWK6rjfXRPhhTS_5EdpqCW0em/preview" },
              { numero: 10, titulo: "Episódio 10", video: "https://drive.google.com/file/d/129QQq2tAFb7NHpAml-Co2hGum9oNkcu9/preview" },
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
        titulo: "Oppenheimer",
        descricao:
          "Oppenheimer é um drama biográfico que retrata a vida de J. Robert Oppenheimer, o físico teórico que liderou o Projeto Manhattan e ajudou a desenvolver a primeira bomba atômica durante a Segunda Guerra Mundial.",
        imagem: "imagens/oppenheimer.webp",
        video:
          "https://drive.google.com/file/d/1KyLuCtH9nG4CUqUWEr9q5dGpo_GbNOMF/preview",
        trailer: "https://www.youtube.com/embed/F3OxA9Cz17A",
        generos: ["biografia", "drama", "história"],
        //ano: 2023
      },
      {
        id: 16,
        tipo: "series",
        titulo: "Wandinha",
        descricao:
          "Wandinha é uma série de comédia sombria que segue a vida de Wandinha Addams, filha do icônico casal Mortícia e Gomez Addams, enquanto ela navega por sua adolescência peculiar em Nevermore Academy.",
        imagem: "imagens/wandinha.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "Wandinha Chega em Casa", video: "https://drive.google.com/file/d/14nS0HWXHo42yVEYnLKhZ_DOYfeEi72As/preview" },
              { numero: 2, titulo: "Uma Triste Solidão é uma Triste Solidão", video: "https://drive.google.com/file/d/14s17da7yDYl-pSZTzFO2m8dT0dC6WQLC/preview" },
              { numero: 3, titulo: "Amigos São Coisas Raras e Preciosas", video: "https://drive.google.com/file/d/14uOr_A7W7g-PmPykr_APzUmgTuw8qjlG/preview" },
              { numero: 4, titulo: "Uma Dor Compartilhada é uma Dor Reduzida", video: "https://drive.google.com/file/d/150vAe6HSJDi1antFz6_hT3Ito2bPVVKs/preview" },
              { numero: 5, titulo: "Você Reaparece Quando Menos Espero", video: "https://drive.google.com/file/d/156KiBTtpKMM1lVhBd3AU_y9YFY7p3jPu/preview" },
              { numero: 6, titulo: "Quase Não Reconheci Você", video: "https://drive.google.com/file/d/15I7ho2_l8jComInd3mnE6R8fGc0nfNb4/preview" },
              { numero: 7, titulo: "Se Você Não Estiver em Agonia, Está Errado", video: "https://drive.google.com/file/d/15PeVIjo9fBcfiLNRqvqbrt3aaIHRFVxt/preview" },
              { numero: 8, titulo: "Um Assassinato de Incrível Proporção", video: "https://drive.google.com/file/d/15eBzQQ6yDoQnOa53eCOecpkaZw29wpnC/preview" },
            ],
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "Mais desgosto", video: "https://drive.google.com/file/d/1gCYft21K4gX8vMT41aNbrUZj4jFQp4fA/preview" },
              { numero: 2, titulo: "Confronto", video: "" },
              { numero: 3, titulo: "Chamado da natureza", video: "" },
              { numero: 4, titulo: "Se estas paredes falassem", video: "https://drive.google.com/file/d/1kKMyEI9iEgiC2l7cyf2TuuBZpuXlYnpj/preview" },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/4vi6ZWe_3Yc",
        generos: ["comédia", "fantasia", "mistério"],
        //ano: 2022
      },
      {
      id: 17,
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
      id: 18,
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
        id: 19,
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
        id: 20,
        tipo: "movie",
        titulo: "Todos Menos Você",
        descricao:
          "Todos Menos Você é uma animação de aventura e comédia onde um grupo de amigos improváveis embarca em uma jornada para salvar seu mundo de uma ameaça iminente.",
        imagem: "imagens/Todos-Menos-Voce.webp",
        video:
          "https://drive.google.com/file/d/1w2jmZU0m9cZf9scnL9eO4aJcxeJHxUZn/preview",
        trailer: "https://www.youtube.com/embed/nnD1W4XuNzQ",
        generos: ["animação", "aventura", "comédia"],
        //ano: 2023
      },
      {
        id: 21,
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
        id: 22,
        tipo: "movie",
        titulo: "Vingadores guerra infinita",
        descricao:
          "Os Vingadores e seus aliados tentam impedir Thanos de coletar as Joias do Infinito, que lhe concederiam poder absoluto para destruir metade do universo.",
        imagem: "imagens/guerra-infinita.webp",
        video:
          "https://drive.google.com/file/d/15OEU9fuH5hjawjaExVnN1kaQBOgVexS8/preview",
        trailer: "https://www.youtube.com/embed/t_ULBP6V9bg",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2018
      },
      {
        id: 23,
        tipo: "movie",
        titulo: "Um Maluco No Golfe 2",
        descricao:
          "Um Maluco No Golfe 2 é uma comédia onde o personagem principal, um golfista excêntrico, enfrenta desafios hilários enquanto tenta vencer um torneio de golfe.",
        imagem: "imagens/mlc-no-golfe2.webp",
        video:
          "https://drive.google.com/file/d/12SAW00ibXphdFJbZVdXP_C9mfuvP8uo9/preview",
        trailer: "https://www.youtube.com/embed/qCks9ymO0Ro",
        generos: ["comédia", "aventura"],
        //ano: 2025
      },
      {
        id: 24,
        tipo: "movie",
        titulo: "A Forja: O Poder da Transformação",
        descricao:
          "A Forja: O Poder da Transformação é um filme de ação e drama onde um grupo de heróis improváveis se une para enfrentar uma ameaça que pode destruir o mundo, enquanto descobrem seus próprios poderes e aprendem a confiar uns nos outros.",
        imagem: "imagens/a-forja.webp",
        video:
          "https://drive.google.com/file/d/1urojqb-5HXZ_cceoc4m1G9wM6G6bwKFN/preview",
        trailer: "http://www.youtube.com/embed/ohQ1IZmce5w",
        generos: ["ação", "aventura", "drama"],
        //ano: 2025
      },
      {
        id: 25,
        tipo: "movie",
        titulo: "Moana 2",
        descricao:
          "Moana 2 é uma animação de aventura onde Moana e seus amigos embarcam em uma nova jornada para salvar seu povo e descobrir novos horizontes.",
        imagem: "imagens/moana2.webp",
        video:
          "https://drive.google.com/file/d/16fCY_biwvJSj-fZmOVj4acDMGsbSpDbV/preview",
        trailer: "http://www.youtube.com/embed/lqMJQa3JhZU",
        generos: ["animação", "aventura", "fantasia"],
        //ano: 2025
      },
      {
        id: 26,
        tipo: "movie",
        titulo: "A fonte da juventude",
        descricao:
          "A Fonte da Juventude é uma comédia de ação onde dois agentes secretos se disfarçam como irmãos para recuperar um artefato lendário que concede a juventude eterna.",
        imagem: "imagens/a-fonte.webp",
        video:
          "https://drive.google.com/file/d/1-Chg4J-ZBfwjybwGkyFFAryoA4ilb9dx/preview",
        trailer: "http://www.youtube.com/embed/qUC2ZINsZcM",
        generos: ["comédia", "aventura", "ação"],
        //ano: 2025
      },
      {
        id: 27,
        tipo: "movie",
        titulo: "Alerta Vermelha",
        descricao:
          "Alerta Vermelha é um filme de ação e comédia onde um agente do FBI se une a um ladrão de arte e uma ladra internacional para capturar uma criminosa procurada.",
        imagem: "imagens/alerta-vermelho.webp",
        video:
          "https://drive.google.com/file/d/133twUmF76Y1zE-rsi5944NrdyUPCwtEe/preview",
        trailer: "http://www.youtube.com/embed/5JQuYpBZar",
        generos: ["ação", "aventura", "comédia"],
        //ano: 2021
      },
      {
        id: 28,
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
        id: 29,
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
        id: 30,
        tipo: "movie",
        titulo: "Invocação do mal 2",
        descricao:
          "Invocação do Mal 2 é um filme de terror que segue os investigadores paranormais Ed e Lorraine Warren enquanto enfrentam um caso sobrenatural envolvendo uma entidade maligna em Londres.",
        imagem: "imagens/invocacao-do-mal2.webp",
        video:
          "https://drive.google.com/file/d/1-Ohx5UsrPw71Z0dTFLQpy00usKPfatur/preview",
        trailer: "http://www.youtube.com/embed/l3LQgORbhu4",
        generos: ["terror", "suspense", "drama"],
        //ano: 2016
      },
      {
        id: 31,
        tipo: "movie",
        titulo: "Invocação do mal 3: A Ordem do Demônio",
        descricao:
          "Invocação do Mal 3 é um filme de terror que segue os investigadores paranormais Ed e Lorraine Warren enquanto enfrentam um caso sobrenatural envolvendo um jovem acusado de assassinato.",
        imagem: "imagens/invocacao-do-mal3.webp",
        video:
          "https://drive.google.com/file/d/13eHfdZiaUnodeACE6ZclMU_f0BpRFwsJ/preview",
        trailer: "http://www.youtube.com/embed/anDtrp34xig",
        generos: ["terror", "suspense", "drama"],
        //ano: 2021
      },
      {
        id: 32,
        tipo: "movie",
        titulo: "A Substância",
        descricao:
          "A Substância é um filme de terror psicológico que segue uma jovem mulher que, após se mudar para uma nova cidade, começa a experimentar eventos sobrenaturais perturbadores relacionados a uma substância misteriosa.",
        imagem: "imagens/a-substancia.webp",
        video:
          "https://drive.google.com/file/d/1GPQpT_nz6s5BTlNIvjP4jwjBVNwXIZI4/preview",
        trailer: "http://www.youtube.com/embed/VtKyVTnH_Bk",
        generos: ["terror", "suspense", "drama"],
        //ano: 2024
      },
      {
        id: 33,
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
        id: 34,
        tipo: "movie",
        titulo: "Atentado em Paris",
        descricao:
          "Atentado em Paris é um thriller de ação que segue um ex-agente da CIA que deve proteger uma testemunha-chave enquanto enfrenta uma conspiração terrorista em Paris.",
        imagem: "imagens/atentado-em-paris.webp",
        video:
          "https://drive.google.com/file/d/1-ODE_eZrQNi788nHgyZihUl3zCPIFCt8/preview",
        trailer: "http://www.youtube.com/embed/U5R0bI8EJCQ",
        generos: ["ação", "crime", "suspense"],
        //ano: 2016
      },
      {
        id: 35,
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
        id: 36,
        tipo: "movie",
        titulo: "Creed: Nascido para Lutar",
        descricao:
          "Creed: Nascido para Lutar é um filme de boxe que segue Adonis Creed, filho de Apollo Creed, enquanto ele busca se tornar um campeão sob a tutela de Rocky Balboa.",
        imagem: "imagens/creed.webp",
        video:
          "https://drive.google.com/file/d/13cxIQ6Cpx9UbJSiU9ohnbZW7k6HOTSEq/preview",
        trailer: "http://www.youtube.com/embed/661sQScpXJc",
        generos: ["ação", "drama", "esporte"],
        //ano: 2015
      },
      {
        id: 37,
        tipo: "movie",
        titulo: "Creed II",
        descricao:
          "Creed II é um filme de boxe que segue Adonis Creed enquanto ele enfrenta Viktor Drago, filho de Ivan Drago, e lida com o legado de seu pai Apollo Creed.",
        imagem: "imagens/creed-2.webp",
        video:
          "https://drive.google.com/file/d/13fiD5WagjTvvBTE9KTuGoEXbL3tLyOGK/preview",
        trailer: "http://www.youtube.com/embed/HKXoW8FISj4",
        generos: ["ação", "drama", "esporte"],
        //ano: 2018
      },
      {
        id: 38,
        tipo: "movie",
        titulo: "Creed III",
        descricao:
          "Creed III é um filme de boxe que segue Adonis Creed enquanto ele enfrenta novos desafios e rivais, buscando provar seu legado no ringue.",
        imagem: "imagens/creed3.webp",
        video:
          "https://drive.google.com/file/d/13elyBjRlYergHCNQpuGocJCAh3sVmPi1/preview",
        trailer: "http://www.youtube.com/embed/vENtKgrHUUU",
        generos: ["ação", "drama", "esporte"],
        //ano: 2023
      },
      {
        id: 39,
        tipo: "movie",
        titulo: "Sorria 2",
        descricao:
          "Sorria 2 é um filme de terror psicológico onde uma jovem médica enfrenta uma entidade sobrenatural que se alimenta do medo, enquanto tenta desvendar os mistérios por trás de uma série de eventos perturbadores.",
        imagem: "imagens/sorria-2.webp",
        video:
          "https://drive.google.com/file/d/1EnQDB4clHP2E_NpXzObNZYfTehUzClN9/preview",
        trailer: "https://www.youtube.com/embed/_e-yvJV9NpM",
        generos: ["terror", "drama"],
        //ano: 2025
      },
      {
        id: 40,
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
        id: 41,
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
        id: 42,
        tipo: "movie",
        titulo: "Até o ultimo homem",
        descricao:
          "Até o Último Homem é um drama de guerra baseado em fatos reais, onde um médico do exército americano se recusa a portar armas e salva soldados feridos durante a Batalha de Okinawa na Segunda Guerra Mundial.",
        imagem: "imagens/ate-o-ultimo-homem.webp",
        video:
          "https://drive.google.com/file/d/1-Jq17siE9GpeC0XhPE8wkkAncxOLvJRl/preview",
        trailer: "http://www.youtube.com/embed/3d_DJngfp_s",
        generos: ["ação", "drama", "guerra"],
        //ano: 2016
      },
      {
        id: 43,
        tipo: "movie",
        titulo: "Exterminio: A Evolução",
        descricao:
          "Extermínio: A Evolução é um filme de ação e ficção científica onde um grupo de sobreviventes luta contra uma ameaça alienígena que evolui rapidamente, colocando em risco a humanidade.",
        imagem: "imagens/exterminio-a-evolucao.webp",
        video:
          "https://drive.google.com/file/d/1P5N3Wkt96AJz2fdZKqf6t5ds9aDLWo54/preview",
        trailer: "http://www.youtube.com/embed/VHyLdWMX8P4",
        generos: ["ação", "ficção científica", "terror"],
        //ano: 2025
      },
      {
        id: 44,
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
              { numero: 6, titulo: "Minha mãe", video: "https://drive.google.com/file/d/11mKHdQwd7qsS22lPu0z_Mfb2PEw2yN5s/preview" },
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
          {
            numero: 3,
            episodios: [
              { numero: 1, titulo: "Hóquei de Mesa", video: "https://drive.google.com/file/d/1-S3TI3ACXvId3iLh1oRyDWpy_hAsroNO/preview" },
              { numero: 2, titulo: "Aposta Radical", video: "https://drive.google.com/file/d/1-UzxvDZfBgCrdiHgi3GeI-buzeUarFl-/preview" },
              { numero: 3, titulo: "Saltitão joga um bolão", video: "https://drive.google.com/file/d/1-aRzEmlegblAULGdETkjGO_RFJPjhEQg/preview" },
              { numero: 4, titulo: "Dentro de casa", video: "https://drive.google.com/file/d/1-fOGcRxGgV6qBqPd3p2-KrVoSAiHrkQ5/preview" },
              { numero: 5, titulo: "Boneco Sinistro", video: "https://drive.google.com/file/d/1-Zngg7-pUMRJAKWyeT1f6qq15NDq1Jrn/preview" },
              { numero: 6, titulo: "Acampar pode ser legal", video: "https://drive.google.com/file/d/1-njxHNy2YlFdU4s_2Nzc3Ez3Vtwt7LOJ/preview" },
              { numero: 7, titulo: "Rebotes e enterradas", video: "https://drive.google.com/file/d/1-dsvEj8tdlFA5Jz9Ss6k99pqj02o5tuy/preview" }, 
              { numero: 8, titulo: "Bicicletas descoladas", video: "https://drive.google.com/file/d/1-rD4JcPyyzd7HfleGcAUcHgcvdwe-TtY/preview" },
              { numero: 9, titulo: "Regras da casa", video: "https://drive.google.com/file/d/1-fdMM65AJG1eGsXvZlkc_o5Jtvi5CI5p/preview" },
              { numero: 10, titulo: "Soltando o Rap", video: "https://drive.google.com/file/d/1-WMhXm8fpYcvtS-rMLrwqqeI_jTMD1Mk/preview" },
              { numero: 11, titulo: "Dando um rolé no meu carango", video: " https://drive.google.com/file/d/100snkBd25sWOnjmP6Vs-vj7hbpPjlxOL/preview" },
              { numero: 12, titulo: "Debaixo do capuz", video: "https://drive.google.com/file/d/10DXAkSfJe5GmOYtd8za5JR7Qc0Namxrp/preview" },
              { numero: 13, titulo: "Fim de semana no benson", video: "https://drive.google.com/file/d/10CAsR4D6C5hmFbrG8UNijpUwXvsHxW8-/preview" },
              { numero: 14, titulo: "Biscoito da sorte", video: "https://drive.google.com/file/d/10LBxCxfLWE_-NC9NqL4sdzuRIE0uOTay/preview" },
              { numero: 15, titulo: "Pense Positivo", video: "https://drive.google.com/file/d/10K270q3REZj5ta38mdNL04UUj08CRcIi/preview" },
              { numero: 16, titulo: "Saltitão contra tecnologia", video: "https://drive.google.com/file/d/10RQLvtURNywTBokDk0E63uqH70-U8NIX/preview" },
              { numero: 17, titulo: "Discando de bumbum", video: "https://drive.google.com/file/d/10NM_DZ6qZ-PYN6l3tjoS6v9byM8thn0l/preview" },
              { numero: 18, titulo: "Ovoselente", video: "https://drive.google.com/file/d/10SzZBo6b_CVZ8ymMy9IS-EySzW3a92Y5/preview" },
              { numero: 19, titulo: "Modelo de barriga", video: "https://drive.google.com/file/d/10RTeKu_GJOEzlhb9cGh9AcBNiUUFnvlX/preview" },
              { numero: 20, titulo: "Magos do vídeo game", video: "https://drive.google.com/file/d/10engY8wvqfKJNJPpEXVd1Sbb__klF25T/preview" },
              { numero: 21, titulo: "O grande ganhador", video: "https://drive.google.com/file/d/10dIj_CVWWMGqwoKC7Q8LUda_euwRroHJ/preview" },
              { numero: 22, titulo: "O melhor hamburguer do mundo", video: "https://drive.google.com/file/d/10qvyQNh5uYpoHXtpyNBf8S4ifqoxUOPb/preview" },
              { numero: 23, titulo: "Substituido", video: "https://drive.google.com/file/d/10lioF3AfCQWlDrzQVKyWyxVkoE_pKi4V/preview" },
              { numero: 24, titulo: "Canoa furada", video: "https://drive.google.com/file/d/111LHEhHVozqneGXi1Cvzz9uSnGXgS-ut/preview" },
              { numero: 25, titulo: "Punhos da justiça", video: "https://drive.google.com/file/d/10rQgapLtrlPW33_MzPtGtYAtfWDnzf3_/preview" },
              { numero: 26, titulo: "Sim, Claro, Sim", video: "https://drive.google.com/file/d/1134diJ3_awpkodzl1-Ky4EQ-Nkb7UFRz/preview" },
              { numero: 27, titulo: "Carrinho detonado", video: "https://drive.google.com/file/d/111dcWry_O4Xd7y3Fp5tUbWnp2sKuGljq/preview" },
              { numero: 28, titulo: "Morto as oito", video: "https://drive.google.com/file/d/119L472IL18bSSidC6jg1WUzgcbP1k7Wt/preview" },
              { numero: 29, titulo: "Acesso Negado", video: "https://drive.google.com/file/d/116GJecaJcJIBwO7OZimzqcQlW1Lz2ad3/preview" },
              { numero: 30, titulo: "Mentor Musculoso", video: "https://drive.google.com/file/d/119tyltk3hmTmJ-8US-O-ZHMTgilc9cDv/preview" },
              { numero: 31, titulo: "O melhor caminhoneiro do mundo", video: "https://drive.google.com/file/d/11DDkSCsoqC1iUZvG_76w79aE6PI8sLEJ/preview" },
              { numero: 32, titulo: "Fora de circulação", video: "https://drive.google.com/file/d/11RK_E0P-Gc57kVVtB2ZHk2GOLQFrNS3G/preview" },
              { numero: 33, titulo: "Restaurante chique", video: "https://drive.google.com/file/d/11JRkI_orQqpRILhiOb_b5dLlzgyvZFGa/preview" },
              { numero: 34, titulo: "O diário", video: "https://drive.google.com/file/d/11ll2cuWw3S2j_80eWgszFokJ-3EfyS0T/preview" },
              { numero: 35, titulo: "O melhor vhs do mundo", video: "https://drive.google.com/file/d/11UN1YMtBF8cwdlXCyCcf75yDBys75-UL/preview" },
              { numero: 36, titulo: "Sem pegadinhas", video: "https://drive.google.com/file/d/11pSrZQQhlLes4c49gZpVlqlreFpX9zlK/preview" },
              { numero: 37, titulo: "O urso morta", video: "https://drive.google.com/file/d/11oCS2OhQjhRkF-W2nqhh1-GIVmHcJUtM/preview" },
              { numero: 38, titulo: "Dados felpudos", video: "https://drive.google.com/file/d/11vDz9MFev4QrbVPcrxZz04U8MX694DOb/preview" },
              { numero: 39, titulo: "Barato Doce", video: "https://drive.google.com/file/d/11saS9lIXf1km02ulAPVtBWk8Cy8lrakM/preview" },
              { numero: 40, titulo: "Beijo Ruim", video: "https://drive.google.com/file/d/11y6uPeWvwdRJ1XcZudFGGehUTsTv09d8/preview" },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/FhKIg8O4AWI",
        generos: ["animação", "comédia"],
        //ano: 2010
      },
      {
        id: 45,
        tipo: "movie",
        titulo: "Alien: Romulus",
        descricao:
          "Alien: Romulus é um filme de ficção científica e terror que explora a origem dos xenomorfos, criaturas alienígenas mortais, em um cenário sombrio e atmosférico.",
        imagem: "imagens/alien.webp",
        video:
          "https://drive.google.com/file/d/1h5U3Kl9XrEwb0AEbd5DTKwgyV8a8LKIk/preview",
        trailer: "http://www.youtube.com/embed/-Eu7XVppK6Q",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2024
      },
      {
        id: 46,
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
        id: 47,
        tipo: "movie",
        titulo: "Homem-Aranha: De Volta ao Lar",
        descricao:
          "Homem-Aranha: De Volta ao Lar é um filme de super-herói onde Peter Parker, o Homem-Aranha, tenta equilibrar sua vida como adolescente e super-herói enquanto enfrenta o vilão Abutre.",
        imagem: "imagens/homem-aranha-de-volta.webp",
        video:
          "https://drive.google.com/file/d/12ZkRQ1s31Ob9CwoKAPVGqQ2rHwC586nj/preview",
        trailer: "http://www.youtube.com/embed/2x-2iYxgMFU",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2017
      },
      {
        id: 48,
        tipo: "movie",
        titulo: "Homem-Aranha no Aranhaverso",
        descricao:
          "Homem-Aranha no Aranhaverso é uma animação que segue Miles Morales, um adolescente que se torna o Homem-Aranha e descobre outras versões do herói em diferentes dimensões.",
        imagem: "imagens/homem-aranha-aranhaverso.webp",
        video:
          "https://drive.google.com/file/d/12cV4IqAs08wxpqUqxpcv7GLJbpsdpMqu/preview",
        trailer: "http://www.youtube.com/embed/SS6ABPkfmBE",
        generos: ["animação", "aventura", "ação"],
        //ano: 2018
      },
      {
        id: 49,
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
        id: 50,
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
        id: 51,
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
        id: 52,
        tipo: "movie",
        titulo: "Thor",
        descricao:
          "Thor é um deus nórdico banido para a Terra, onde aprende lições de humildade e heroísmo enquanto enfrenta inimigos poderosos.",
        imagem: "imagens/thor.webp",
        video:
          "https://drive.google.com/file/d/12UxZ3nJbnZjfz0_U8oXIvIhNC97Bnw9W/preview",
        trailer: "http://www.youtube.com/embed/GI-NJq82kH8",
        generos: ["ação", "ficção científica", "aventura"],
        //ano: 2011
      },
      {
        id: 53,
        tipo: "movie",
        titulo: "Thor 2: O Mundo das Trevas",
        descricao:
          "Thor 2: O Mundo das Trevas é uma sequência onde Thor enfrenta um antigo inimigo que ameaça o universo, enquanto lida com questões familiares e alianças inesperadas.",
        imagem: "imagens/thor-o-mundo-sombrio.webp",
        video:
          "https://drive.google.com/file/d/12UiR_cio8SxT6a0wRA-1GYUq-Jk5T2up/preview",
        trailer: "http://www.youtube.com/embed/BmCT2nQu90A",
        generos: ["ação", "ficção científica", "aventura"],
        //ano: 2013
      },
      {
        id: 54,
        tipo: "movie",
        titulo: "Thor: Ragnarok",
        descricao:
          "Thor: Ragnarok é um filme de ação e aventura onde Thor deve enfrentar Hela, a deusa da morte, e salvar Asgard de sua destruição iminente.",
        imagem: "imagens/thor-ragnarok.webp",
        video:
          "https://drive.google.com/file/d/12QzzBDFnDzyiHf9exSe2enHvuT-s_nqz/preview",
        trailer: "http://www.youtube.com/embed/UvNnqWLruXA",
        generos: ["ação", "ficção científica", "aventura"],
        //ano: 2017
      },
      {
        id: 55,
        tipo: "movie",
        titulo: "Thor: Amor e Trovão",
        descricao:
          "Thor: Amor e Trovão é um filme de ação e aventura onde Thor enfrenta novos desafios enquanto busca por amor e redenção, lidando com a ameaça de Gorr, o Deus Carniceiro.",
        imagem: "imagens/thor-amor-e-trovao.webp",
        video:
          "https://drive.google.com/file/d/12OhFNtC6zNKswVpnW_xrVlyWWNOEz-CA/preview",
        trailer: "http://www.youtube.com/embed/1c_W_4cNLn0",
        generos: ["ação", "ficção científica", "aventura"],
        //ano: 2022
      },
      {
        id: 56,
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
        id: 57,
        tipo: "movie",
        titulo: "Barbie",
        descricao:
          "Barbie é um filme que explora a vida de uma boneca icônica, mostrando sua jornada de autodescoberta e empoderamento em um mundo cheio de desafios e aventuras.",
        imagem: "imagens/barbie.webp",
        video:
          "https://drive.google.com/file/d/1rLTXfato7uep6YyOhmz4vzbQvChWYa5G/preview",
        trailer: "https://www.youtube.com/embed/Ujs1Ud7k49M",
        generos: ["aventura", "comédia", "fantasia"],
        //ano: 2023
      },
      {
        id: 58,
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
        id: 59,
        tipo: "movie",
        titulo: "Homem-Aranha 2",
        descricao:
          "Homem-Aranha 2 é um filme de super-herói onde Peter Parker enfrenta novos desafios enquanto tenta equilibrar sua vida pessoal e suas responsabilidades como herói.",
        imagem: "imagens/homem-aranha2.webp",
        video:
          "https://drive.google.com/file/d/12WFn9_k5NXQ4EDQ1dabrcHvfp8apCQfR/preview",
        trailer: "http://www.youtube.com/embed/1UAzz8ncM68",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2004
      },
      {
        id: 60,
        tipo: "movie",
        titulo: "Homem-Aranha 3",
        descricao:
          "Homem-Aranha 3 é um filme de super-herói onde Peter Parker enfrenta novos inimigos e dilemas pessoais, enquanto lida com a influência de um simbiótico alienígena.",
        imagem: "imagens/homem-aranha3.webp",
        video:
          "https://drive.google.com/file/d/12Wzv397DAj_GZOSCK2umY8jVhq9yR4Uk/preview",
        trailer: "http://www.youtube.com/embed/CJBJQl9X5R8",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2007
      },
      {
        id: 61,
        tipo: "movie",
        titulo: "O Espetacular Homem-Aranha",
        descricao:
          "O Espetacular Homem-Aranha é um reboot da franquia onde Peter Parker descobre seus poderes e enfrenta o Lagarto, enquanto busca entender seu passado e sua identidade.",
        imagem: "imagens/o-homem-aranha.webp",
        video:
          "https://drive.google.com/file/d/12rZMiFG_BbQThF_j-JYg9fmQeHnKhU2J/preview",
        trailer: "http://www.youtube.com/embed/6nzNdpJ3qMo",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2012
      },
      {
        id: 62,
        tipo: "movie",
        titulo: "O Espetacular Homem-Aranha 2",
        descricao:
          "O Espetacular Homem-Aranha 2 é um filme de super-herói onde Peter Parker enfrenta novos desafios e inimigos, enquanto tenta equilibrar sua vida pessoal e suas responsabilidades como herói.",
        imagem: "imagens/o-homem-aranha2.webp",
        video:
          "https://drive.google.com/file/d/12qLYP5GGIBKaOyD9hzqVRAp-84LdnqaX/preview",
        trailer: "http://www.youtube.com/embed/PfUDLzyC1cM",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2014
      },
      {
        id: 63,
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
        id: 64,
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
        id: 65,
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
        id: 66,
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
        id: 67,
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
        id: 68,
        tipo: "series",
        titulo: "Naruto",
        descricao:
          "Naruto é um anime que acompanha a jornada de um jovem ninja determinado a conquistar o reconhecimento de sua vila e se tornar Hokage.",
        imagem: "imagens/naruto.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "Uzumaki Naruto Chega!", video: "https://drive.google.com/file/d/11rk7hZ-_ojYspVZNBSvV30sKKsk0WzO1/preview" },
              { numero: 2, titulo: "Meu Nome é Konohamaru!", video: "https://drive.google.com/file/d/11sdNfqjVtoUz8-VPJp3SxQx2nwBOJC7w/preview" },
              { numero: 3, titulo: "Sasuke e Sakura: Amigos ou Inimigos?", video: "https://drive.google.com/file/d/11xQUrRiU7i2fB9bOXpctnHtMFjqadcLA/preview" },
              { numero: 4, titulo: "Passar ou Falhar — Um Teste de Sobrevivência!", video: "https://drive.google.com/file/d/11tNk1OcyTs9FsIQxx8ETEA8Y_LvjMAB_/preview" },
              { numero: 5, titulo: "Você Fracassou! A Decisão Final de Kakashi", video: "https://drive.google.com/file/d/120jKvYbSSy3KBrp_WO02PaRni5Arr785/preview" },
              { numero: 6, titulo: "Uma Missão Perigosa! Aventura ao País das Ondas!", video: "https://drive.google.com/file/d/12-5yqaXdEVfXjfjt-QhjLLOubcY8-Exf/preview" },
              { numero: 7, titulo: "O Assassino da Névoa", video: "https://drive.google.com/file/d/122y9rEeuC-hXyG1Bjdc0v9hkvcN0ENeC/preview" },
              { numero: 8, titulo: "O Juramento de sangue", video: "https://drive.google.com/file/d/125FawxQZqUo1nW8ov7z2M7jFgSi1XBxK/preview" },
              { numero: 9, titulo: "Kakashi: O ninja que copia", video: "https://drive.google.com/file/d/124kHtDEI_x2zQXbdrxh_h2Gu4zlt71XE/preview" },
              { numero: 10, titulo: "Naruto Vê o Seu Futuro!", video: "https://drive.google.com/file/d/12Boap-89AvJ8__ODTK0KJlC0zQleen45/preview" },
              { numero: 11, titulo: "A Terra Onde um Herói Nunca Morrerá", video: "https://drive.google.com/file/d/11kvBtYU97B9ihdkx8_0NLCkdSnI__Ls4/preview" },
              { numero: 12, titulo: "A Batalha Começa: Naruto x Sasuke", video: "https://drive.google.com/file/d/11s293M3FMuLGExizxxfAuqHgeqZZ_3s2/preview" },
              { numero: 13, titulo: "O Segredo do Sharingan", video: "https://drive.google.com/file/d/11rP6gp-Ftf7BW4qK9yit3q5U2jnj-3Ef/preview" },
              { numero: 14, titulo: "Eu Não Vou Fugir!", video: "https://drive.google.com/file/d/11sVwQhmxXP7YkcJS9OCVMZMpTfSkSewp/preview" },
              { numero: 15, titulo: "A Batalha Final: Zabuza vs Kakashi!", video: "https://drive.google.com/file/d/123OUlCWbfuYTe5P71TzW3t-LNCl8Il5R/preview" },
              { numero: 16, titulo: "O Selo se Rompe: Naruto Perdendo o Controle!", video: "https://drive.google.com/file/d/10KcBffAdOhN-EJrsU5g6MoiIhtrv1rCg/preview" },
              { numero: 17, titulo: "Passado Branco, Ambição Escondida", video: "https://drive.google.com/file/d/10OvneMFVKVc13JKsySzyg-M1-5ZVCaXv/preview" },
              { numero: 18, titulo: "Uma Ferramenta Conhecida como Shinobi", video: "https://drive.google.com/file/d/10Ll5T2gHR05ouZx7X2qFH14JvRJCW-RA/preview" },
              { numero: 19, titulo: "O Demônio na Neve", video: "https://drive.google.com/file/d/10SVH2UGcfus6UQElsjlUPQJqlZRHNcwB/preview" },
              { numero: 20, titulo: "Um Novo Capítulo Começa: A Prova Chūnin", video: "https://drive.google.com/file/d/10PwNoAKLJ45jmi753IF9BDStCOa4oYdF/preview" },
              { numero: 21, titulo: "Identifiquem-se: Rivais Novos e Poderosos", video: "https://drive.google.com/file/d/10WgjAY8278fyNZvBDvMq0mkzoOn3AdkR/preview" },
              { numero: 22, titulo: "Rock Lee Contra Sasuke!", video: "https://drive.google.com/file/d/10VrKR7QW9I3Bj-QlQYYIEGDx7MBfqoEK/preview" },
              { numero: 23, titulo: "A Batalha de Pré-Seleção: Todos Contra Todos!", video: "https://drive.google.com/file/d/10gYXDdPxBcFKE32HZuwBIBBgJzp3qkst/preview" },
              { numero: 24, titulo: "Liguem os Motores: A Prova Chunin Começa!", video: "https://drive.google.com/file/d/10aQ6qEQhOEm32dofAncqDnW8kRP2yHiZ/preview" },
              { numero: 25, titulo: "A Décima Pergunta: Tudo ou Nada!", video: "https://drive.google.com/file/d/10jRRpE0ZGOlUHjfjztagGpOecd1SCJXa/preview" },
              { numero: 26, titulo: "Reportagem Especial: Ao Vivo da Floresta...", video: "https://drive.google.com/file/d/10h1Ml5awRHaj5_eH7LWV05FE-OI7c_dZ/preview" },
              { numero: 27, titulo: "Encare ou Fuja na Floresta da Morte", video: "https://drive.google.com/file/d/10rGNCV8xcDNxCVlMmzcMj2EyZUrL_F-F/preview" },
              { numero: 28, titulo: "Comer ou Ser Comido: Pânico na Floresta", video: "https://drive.google.com/file/d/10nTWrmy2VXA6EAfKwbizsGsxPpaN35Hp/preview" },
              { numero: 29, titulo: "Os Cinco de Konoha: Um Novo Time", video: "https://drive.google.com/file/d/115MDiH4mwyZY-nykdw5H4RTUJ44zeHzN/preview" },
              { numero: 30, titulo: "A Técnica Proibida: O Selo do Ódio", video: "https://drive.google.com/file/d/110pDUy-iuCirkKiWiQBrQKF1CrX1BmBU/preview" },             
              { numero: 31, titulo: "A Promessa do Sobrancelhudo: Amor Eterno e Proteção!!", video: "https://drive.google.com/file/d/13T5nasr14BDaMZYMqpJMLsWzdldfoK84/preview" },
              { numero: 32, titulo: "Sakura Floresce!", video: "https://drive.google.com/file/d/13W8Q3tW2OXigFRuTyQMjl63ySSSJY4Du/preview" },
              { numero: 33, titulo: "Formação de Batalha: Ino-Shika-Cho!", video: "https://drive.google.com/file/d/13Um_X1JzbrtG0MUmdJC2CptKOAEylctn/preview" },
              { numero: 34, titulo: "Akamaru Treme: A Força Cruel de Gaara", video: "https://drive.google.com/file/d/13d-2fxzsMjn2QuOwS1l5NeMatCCW_vrR/preview" },
              { numero: 35, titulo: "O Segredo do Pergaminho: Não é Permitido Olhar", video: "https://drive.google.com/file/d/13cKABJCzUJw5mYLJqg3zYhEm8qfsiCnl/preview" },
              { numero: 36, titulo: "Clone Contra Clone: Os Meus São Melhores do que os Seus", video: "https://drive.google.com/file/d/13h5nypxJXIIJJnn6vsYzRB5mia_GPKnb/preview" },
              { numero: 37, titulo: "Sobrevivendo ao Corte: Os Nove Novatos Juntos Outra Vez", video: "https://drive.google.com/file/d/13eboCFqHGHfVTzBOGQxeHXTIcq_wjUYZ/preview" },
              { numero: 38, titulo: "Estreitando o Campo, Morte Súbita, Eliminação!", video: "https://drive.google.com/file/d/13nqfb6-M3stcgremrbnjUzyxkcQvJNYs/preview" },
              { numero: 39, titulo: "O Ciúme do Sobrancelhudo: A Rajada de Leões se Solta", video: "https://drive.google.com/file/d/13mk219Cjq75bpjz3zfiETlgPJSWvhjmP/preview" },
              { numero: 40, titulo: "Kakashi e Orochimaru Cara a Cara", video: "https://drive.google.com/file/d/13rxbcmj_hTPD3jKhM6q6fMxmf6eW35LU/preview" },
              { numero: 41, titulo: "Explosão Kunoichi, As Rivais se Enfrentam", video: "https://drive.google.com/file/d/13pGLNUPoMkKQUsr3YEZpeMf5nHO9dZ5N/preview" },
              { numero: 42, titulo: "A Batalha Final: Cha!", video: "https://drive.google.com/file/d/13wJrqjrxuzoTn2esbaxvPokBExmCjKRm/preview" },
              { numero: 43, titulo: "A Kunoichi Assassina e o Tremulo Shikamaru", video: "https://drive.google.com/file/d/13tLiZ3m7_JFP9dELZd6MJqXzQz-2BS7K/preview" },
              { numero: 44, titulo: "Akamaru se Revela: Quem é o Melhor Cachorro?", video: "https://drive.google.com/file/d/13x0sMwkckitRyATovUNBWbCNzcFVhq3F/preview" },
              { numero: 45, titulo: "Ataque Surpresa: A Arma Secreta de Naruto", video: "https://drive.google.com/file/d/13x0Y-crbtD1f67r34UjWSXmlwf_6dyk1/preview" },
              { numero: 46, titulo: "Batalha Byakugan: Hinata Ganha Coragem", video: "https://drive.google.com/file/d/144XJX-iG994YMgNYR-DDpw7qb-LMZw6y/preview" },
              { numero: 47, titulo: "Uma Derrota Digna!!", video: "https://drive.google.com/file/d/13ywwJkgvCXT_P5dgDeLIRnq6sxZWEATq/preview" },
              { numero: 48, titulo: "Gaara Contra Rock Lee: O Poder da Juventude Explode", video: "https://drive.google.com/file/d/14Mff-gQQi8lToUzxOIZbvJ0ud2obnM6r/preview" },
              { numero: 49, titulo: "A Força Oculta de Lee: Um Jutsu Secreto Proibido", video: "https://drive.google.com/file/d/14OrpHXIQVEi0R1xyPo1AWerOLtBXj_Nt/preview" },
              { numero: 50, titulo: "O Quinto Portão: Um Ninja Esplêndido Nasce", video: "https://drive.google.com/file/d/14RHJhgWLO6aZd3itvaPGJ6jOBE4w3x3h/preview" },
              { numero: 51, titulo: "Uma Sombra na Escuridão", video: "https://drive.google.com/file/d/1-AdzDdj6yDVmeaE-X5DBlBAr4SihQjm1/preview" },
              { numero: 52, titulo: "Ebisu Volta: O Treinamento Mais Duro de Naruto", video: "https://drive.google.com/file/d/1-5qnsAXwAxANXtxNvjUxp-JqnBokcKTJ/preview" },
              { numero: 53, titulo: "Jiraiya Retorna!", video: "https://drive.google.com/file/d/1-9cveLpnXioRHTDP-ZaF7wJPyCUSepCD/preview" },
              { numero: 54, titulo: "Jutsu de Invocação: A Sabedoria do Sábio Sapo", video: "https://drive.google.com/file/d/10CQrR2dRSrg5SVXGbnrAizCL28M4YnPm/preview" },
              { numero: 55, titulo: "Um Sentimento de Anseio", video: "https://drive.google.com/file/d/1-CADy82mgbLsfPZ_G2wd60vvvG3K1Hre/preview" },
              { numero: 56, titulo: "Viva ou Morra: Arrisque Tudo para Ganhar Tudo", video: "https://drive.google.com/file/d/1-pLjdPLa3WNDKIrH-c_w5fCjdU4SD9p0/preview" },
              { numero: 57, titulo: "Ele Voa! Ele Salta! Ele Espreita! O Sapo Chefe Aparece", video: "https://drive.google.com/file/d/10-O_iFffhPKyERGyKLIZenzH9yiWrdXB/preview" },
              { numero: 58, titulo: "Hospital Sitiado: A Mão do Mal Revelada", video: "https://drive.google.com/file/d/1-WZX2HQ_smnRJC8FmC4isy4PQUCltV14/preview" },
              { numero: 59, titulo: "As Rodadas Finais: A Corrida Para a Arena de Batalha", video: "https://drive.google.com/file/d/10F3g0tULNzv3DtYInoqjDm3swrCucYbz/preview" },
              { numero: 60, titulo: "Byakugan Contra Jutsu Clones da Sombra", video: "https://drive.google.com/file/d/1-LLTxL7M77xCYbuTf6ehED47sJT-AfkD/preview" },
              { numero: 61, titulo: "A Derradeira Defesa", video: "https://drive.google.com/file/d/10E0AkRy0puiKPIOM0QnI5GeVGGAMSARa/preview" },
              { numero: 62, titulo: "O Verdadeiro Poder do Fracassado", video: "https://drive.google.com/file/d/1-XjOQO4wiqs1g3CcXthG2no1SoOUkpG7/preview" },
              { numero: 63, titulo: "Bata ou Desista: As Rodadas Finais Ficam Complicadas", video: "https://drive.google.com/file/d/1-mKfQeSZY9aeAU52S-_2LG5XUTe_3UZK/preview" },
              { numero: 64, titulo: "Motivação Zero: O Cara com Inveja da Nuvem", video: "https://drive.google.com/file/d/1-lzlgda7hLIuqLXy-hBJObXmWqVgTTn2/preview" },
              { numero: 65, titulo: "Folha Dançante, Areia Contorcida", video: "https://drive.google.com/file/d/1-wcjCAILc9V81nGuqafMqOrUqhaRC3Zp/preview" },
              { numero: 66, titulo: "O Jutsu do Sobrancelhudo: Estilo Sasuke!", video: "https://drive.google.com/file/d/10yUiuE7N6B4uZqqzmqHi1eZ03mlK151N/preview" },
              { numero: 67, titulo: "Atrasado para o Show, mas Pronto para Lutar!", video: "https://drive.google.com/file/d/117Nsr0S-rad0Z_42VyuzlC5WCQQg58Kr/preview" },
              { numero: 68, titulo: "Hora Zero! A Destruição da Aldeia da Folha Começa", video: "https://drive.google.com/file/d/110Y9oAMLVETW56NpvaBqrlesQ36uqFZl/preview" },
              { numero: 69, titulo: "Aldeia em Angústia: Uma Nova Missão Nível A", video: "https://drive.google.com/file/d/1195UdKlfodTofhsqCLAgo874q-vok7IG/preview" },
              { numero: 70, titulo: "O Ocioso é Posto em Ação", video: "https://drive.google.com/file/d/117jSF-XiEhB3Jwgjf_jjTCrbeaUq6OY9/preview" },
              { numero: 71, titulo: "Uma Luta Incomparável: Hokage contra Hokage", video: "https://drive.google.com/file/d/11JQLucyAdNN670L8X8a5j7idyGLXyTYA/preview" },
              { numero: 72, titulo: "Um Erro do Passado: O Rosto Revelado", video: "https://drive.google.com/file/d/119SE8wdqCLyvmcCZ6DO64Vz7XCj08oIE/preview" },
              { numero: 73, titulo: "Técnica Secreta Proibida: Selo Ceifeiro da Morte!", video: "https://drive.google.com/file/d/11jYXNty1647F__ePj1tvGngFPZG6KxcL/preview" },
              { numero: 74, titulo: "Uma Verdade Surpreendente! A Identidade do Gaara Aparece", video: "https://drive.google.com/file/d/11cyeMYJ6BlRK5um5PcBXOUF25C_oRkA7/preview" },
              { numero: 75, titulo: "A Decisão de Sasuke", video: "https://drive.google.com/file/d/11xb2-irdhRn-3V2Cdh8Waf3sciMKwDe1/preview" },
              { numero: 76, titulo: "O Assassino da Noite Enluarada", video: "https://drive.google.com/file/d/11vXx63SkYEV1x4cN1rAyFkKdOD11EunB/preview" },
              { numero: 77, titulo: "Luz contra Escuridão: As Duas Faces de Gaara", video: "https://drive.google.com/file/d/12AseUFDxL57SBmy1XNxoMIhedjgwLJEQ/preview" },
              { numero: 78, titulo: "O Manual do Ninja Naruto!", video: "https://drive.google.com/file/d/127qeWpaZg8dEmxpbGYF9ibUFEDE1i6TL/preview" },
              { numero: 79, titulo: "Além do Limite da Escuridão e Luz!", video: "https://drive.google.com/file/d/12HbX1OvPMuB1_q6s0_SY6xWI9faqIYRf/preview" },
              { numero: 80, titulo: "O Terceiro Hokage, para sempre…", video: "https://drive.google.com/file/d/12CDVBe2eH-H9_-3cW0_X9W5iT4tFmuxD/preview" },
              { numero: 81, titulo: "O Retorno da Névoa Matutina", video: "https://drive.google.com/file/d/13y9cMRN8ZkvNt6RmyDHc8eeUIOdWBQf1/preview" },
              { numero: 82, titulo: "Olho no Olho: Sharingan Contra Sharingan!", video: "https://drive.google.com/file/d/141squvdy3iG6Ct3XKMjBj2JMCf_vincq/preview" },
              { numero: 83, titulo: "Jiraiya: O Potencial Desastre do Naruto!", video: "https://drive.google.com/file/d/147xOUGKOBthI2nqIKPltE80fADAko2Hi/preview" },
              { numero: 84, titulo: "Ruja, Chidori! Irmão Contra Irmão!", video: "https://drive.google.com/file/d/143Mr27siGtmNoRraO1HHQLs_99fuS7wR/preview" },
              { numero: 85, titulo: "Ódio entre os Uchihas: O Último do Clã!", video: "https://drive.google.com/file/d/14GX1rps0Fe59EPJsB5g2XJve96M5XQbv/preview" },
              { numero: 86, titulo: "Um Novo Treinamento Começa", video: "https://drive.google.com/file/d/14AdBIja5MOQkDKB8ehLCYNFMEZKp9yPt/preview" },
              { numero: 87, titulo: "O Treinamento Continua: Estoure o Balão D'Água", video: "https://drive.google.com/file/d/14VN5vAh76YJgu4bADNAoaeGfqI6kh0aJ/preview" },
              { numero: 88, titulo: "Ponto Focal! A Marca da Folha", video: "https://drive.google.com/file/d/14O_n4A-PUoGeDv0V9WcGErCZlDcYtNIj/preview" },
              { numero: 89, titulo: "Uma Escolha Impossível: A Dor Dentro do Coração de Tsunade", video: "https://drive.google.com/file/d/14WzU8pGecDFjzJ_DlkYTXA6MHHV6mIzz/preview" },
              { numero: 90, titulo: "Imperdoável! Uma Total Falta de Respeito", video: "https://drive.google.com/file/d/140nk20b4mFHee9YygIs7AtWdOhdm4npl/preview" },
              { numero: 91, titulo: "Herança! O Colar da Morte!", video: "https://drive.google.com/file/d/14duu9lygiLsfKBhH7cz-1WjpFglTbPE_/preview" },
              { numero: 92, titulo: "Uma Oferta Duvidosa", video: "https://drive.google.com/file/d/14__FxLI_MnrhZqQEsPR33EDdSZt4RgB1/preview" },
              { numero: 93, titulo: "Interrupção... ", video: "https://drive.google.com/file/d/152bGcFxSTG0JZJqx64x4TwaETGeQm6Pi/preview" },
              { numero: 94, titulo: "Atacar! A Fúria do Rasengan!", video: "https://drive.google.com/file/d/14f4Y7YH8e2Lz6L-Cvi5mP-dihb5skeEZ/preview" },
              { numero: 95, titulo: "A Quinta Hokage... Apostando a Vid", video: "https://drive.google.com/file/d/14emlLcZGQ6UURPO2CBpCG9KOKzAdOQj5/preview" },
              { numero: 96, titulo: "Paralisação Completa! O Fim do Sannin!", video: "https://drive.google.com/file/d/14jloUUBPtXy6HmQo7ZarsxcdA4drwP34/preview" },
              { numero: 97, titulo: "Sequestrado!", video: "https://drive.google.com/file/d/14iMTvtP8vS4Z2d9BTMObcz63ZjBEmW9v/preview" },
              { numero: 98, titulo: "O Aviso de Tsunade", video: "https://drive.google.com/file/d/14w44tQkraJEGYYFPJYhVMv1b0EmHCmAI/preview" },
              { numero: 99, titulo: "A Vontade de Fogo Ainda Queima", video: "https://drive.google.com/file/d/14w2U9g9pz-0ogqC_I8Htvi2eOtbuwF9c/preview" },
              { numero: 100, titulo: "Sensei e o Aluno: O Laço dos Shinobi!", video: "https://drive.google.com/file/d/150Kmft3eGXks9M2uTMWoCXgEde-IwRFk/preview" },
              { numero: 101, titulo: "Você Precisa Ver! Você Precisa Conhecer! O Verdadeiro Rosto do Kakashi-Sensei!", video: "https://drive.google.com/file/d/1Tw7BZhMPxnZnzdGyx_nkYQJ1JOngw863/preview" },
              { numero: 102, titulo: "Missão: Ajudar um Velho Amigo do País do Chá!", video: "https://drive.google.com/file/d/1B8WMK_EU-ledsbQ9_rPoQf5DDhT8AbP7/preview" },
              { numero: 103, titulo: "A Corrida Começou! Problemas em Alto Mar!", video: "https://drive.google.com/file/d/1KZtx60uGKvRzDzu878jlD0ZlWcg9b5e8/preview" },
              { numero: 104, titulo: "Corre, Idate, Corre...", video: "https://drive.google.com/file/d/1ZgGehpBYzFs-0a8fWDbXzW3kzVNDymq6/preview" },
              { numero: 105, titulo: "Uma Batalha Feroz do Trovão Retumbante", video: "https://drive.google.com/file/d/1-nF4XSG6csmg7QY5gIj_ka1EECzO0BHd/preview" },
              { numero: 106, titulo: "O Último Arranco: O Ato Final de Desespero", video: "https://drive.google.com/file/d/1wvPWWJnQShXmzfiXgN_2U3jqndr5YgGb/preview" },
              { numero: 107, titulo: "A Batalha Começa: Naruto contra Sasuke!", video: "https://drive.google.com/file/d/17MiennZVoTt4NsV0MhYUxui4iewMvJTb/preview" },
              { numero: 108, titulo: "Rivais Amargos e Laços Desfeitos", video: "https://drive.google.com/file/d/1WReK0UIMhtusvlFfVtxrnMseal-Le1Wk/preview" },
              { numero: 109, titulo: "Convite da Vila do Som", video: "https://drive.google.com/file/d/1fu-boYONvhb1euvy6muFXQQU4H-eZcQ8/preview" },
              { numero: 110, titulo: "Formada a Equipe de Resgate do Sasuke!", video: "https://drive.google.com/file/d/17nF59YQFwQGaEAsjA6ziEQJaK61ugAwY/preview" },
              { numero: 111, titulo: "Som Contra Folha", video: "https://drive.google.com/file/d/1GodFa5NH3-aVD889PUPOQrus2LdqA_JR/preview" },
              { numero: 112, titulo: "Motim na Equipe: A União se Defaz", video: "https://drive.google.com/file/d/1LT8XrHVXl4Ixm3WPVgtGeDEcuFcH0LVU/preview" },
              { numero: 113, titulo: "Força Total! Chouji, arrasa!", video: "https://drive.google.com/file/d/1aLX9ywi2iWzZX7hoo8bqIiUWU8SplADn/preview" },
              { numero: 114, titulo: "Adeus Velho Amigo", video: "https://drive.google.com/file/d/1YDH-v9M7j6cDFqYB18gLuwIpraZ0sy0w/preview" },
              { numero: 115, titulo: "Seu Oponente Sou Eu!", video: "https://drive.google.com/file/d/1ASEWK82RIG9ipVi09QdvMOQb1OX3Irwj/preview" },
              { numero: 116, titulo: "360 Graus de Visão: O Ponto Cego do Byakugan!", video: "https://drive.google.com/file/d/1bjqr-uryaCOj3IjOYc7ynJf6IdflaFOJ/preview" },
              { numero: 117, titulo: "Perder Não é Uma Opção!", video: "https://drive.google.com/file/d/1t8kJp6_4fT2nPF850GO_m2a_wi98CnB-/preview" },
              { numero: 118, titulo: "O Hospedeiro Chega Tarde Demais!", video: "https://drive.google.com/file/d/1D5clIfzSM9rujHuLWpVdyVQ-6WKwdgh0/preview" },
              { numero: 119, titulo: "Erro de Cálculo: Um Novo Inimigo Aparece!", video: "https://drive.google.com/file/d/17u3ZhIRW7eL8bkuUHALmAz5GWxwD5eeU/preview" },
              { numero: 120, titulo: "Rugidos e Uivos! A Derradeira Equipe de Lutadores", video: "https://drive.google.com/file/d/1LG1RXV3nY8nmR9yI_qim5yvgMF1Uyq5U/preview" },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/QczGoCmX-pI",
        generos: ["ação", "aventura", "fantasia", "drama"],
        //ano: 2002
      },
      {
        id: 69,
        tipo: "movie",
        titulo: "Bob Esponja: O Filme",
        descricao:
          "Bob Esponja e Patrick embarcam em uma aventura épica para recuperar a coroa roubada do Rei Netuno e salvar o restaurante Siri Cascudo.",
        imagem: "imagens/bobesponja.webp",
        video:
          "https://drive.google.com/file/d/1jBREaCAJxwxjUuEtOcuOQdIvhttSMApt/preview",
        trailer: "http://www.youtube.com/embed/MySk5QL3eWM",
        generos: ["animação", "aventura", "comédia"],
        //ano: 2004
      },
      {
        id: 70,
        tipo: "movie",
        titulo: "M3GAN",
        descricao:
          "Uma inteligência artificial projetada para ser a companheira perfeita de uma menina órfã começa a agir de forma autônoma e violenta.",
        imagem: "imagens/megan.webp",
        video:
          "https://drive.google.com/file/d/1920vNpTEfny3yQvlGQKMvSEGAZAc9qde/preview",
        trailer: "http://www.youtube.com/embed/BRb4U99OU8",
        generos: ["terror", "suspense"],
        //ano: 2023
      },
      {
        id: 71,
        tipo: "movie",
        titulo: "M3GAN 2.0",
        descricao:
          "A sequência de M3GAN continua a história da inteligência artificial que se torna uma ameaça, explorando as consequências de sua criação e os desafios enfrentados por seus criadores.",
        imagem: "imagens/megan-2.0.webp",
        video:
          "https://drive.google.com/file/d/1nOEyLAnMjZOqvW8hpO8rkkXWQeuD2-gm/preview",
        trailer: "http://www.youtube.com/embed/kX8yjM09qLQ",
        generos: ["terror", "suspense"],
        //ano: 2025
      },
      {
        id: 72,
        tipo: "movie",
        titulo: "Meu Malvado Favorito",
        descricao:
          "Gru, um vilão que planeja roubar a Lua, adota três órfãs e descobre o verdadeiro significado da família.",
        imagem: "imagens/mmf.webp",
        video:
          "https://drive.google.com/file/d/1oOEH3mqdgS9NHKS8DQrGJG6naHXVca59/preview",
        trailer: "https://www.youtube.com/embed/462RosJNAMw",
        generos: ["animação", "aventura", "comédia"],
        //ano: 2010
      },
      {
        id: 73,
        tipo: "movie",
        titulo: "Meu Malvado Favorito 2",
        descricao:
          "Gru, agora um ex-vilão, é recrutado por uma organização secreta para ajudar a capturar um novo vilão que ameaça o mundo.",
        imagem: "imagens/mmf2.webp",
        video:
          "https://drive.google.com/file/d/1WYm1IPqIBcmI8poXgMqvDsvWGzNwKEu1/preview",
        trailer: "https://www.youtube.com/embed/gi2QWNZ9jms",
        generos: ["animação", "aventura", "comédia"],
        //ano: 2013
      },
      {
        id: 74,
        tipo: "movie",
        titulo: "Meu Malvado Favorito 3",
        descricao:
          "Gru, agora um ex-vilão, enfrenta um novo inimigo e descobre que tem um irmão gêmeo perdido, enquanto tenta equilibrar sua vida familiar.",
        imagem: "imagens/mmf3.webp",
        video:
          "https://drive.google.com/file/d/1K2ATqVoLsPPOXHXUnTW3Tb4qK_87n_XL/preview",
        trailer: "https://www.youtube.com/embed/9XEHAP9UGfY",
        generos: ["animação", "aventura", "comédia"],
        //ano: 2017
      },
      {
        id: 75,
        tipo: "movie",
        titulo: "Interstellar",
        descricao:
          "Uma equipe de exploradores viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
        imagem: "imagens/interestelar.webp",
        video:
          "https://drive.google.com/file/d/1OVY77iz5jiNuud8xOIQCbEkcAo1lP5Mj/preview",
        trailer: "https://www.youtube.com/embed/i6avfCqKcQo",
        generos: ["ficção científica", "aventura", "drama"],
        //ano: 2014
      },
      {
        id: 76,
        tipo: "movie",
        titulo: "Tropa de Elite",
        descricao:
          "Um capitão do BOPE enfrenta a violência do tráfico e os dilemas morais da guerra urbana no Rio de Janeiro.",
        imagem: "imagens/tropa-de-elite.webp",
        video:
          "https://drive.google.com/file/d/118bEax43b4FWj5MZ38zZbXF_1zozmLaF/preview",
        trailer: "https://www.youtube.com/embed/uZBiNJQxtGw",
        generos: ["ação", "drama"],
        //ano: 2007
      },
      {
        id: 77,
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
        id: 78,
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
        id: 79,
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
    ]
