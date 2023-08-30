document.addEventListener("DOMContentLoaded", function() {
    const section  = document.querySelector('.container');
    const divResp  = document.querySelector('.resp');
    const selectRJ = document.querySelector('.select-rj');
    const selectSP = document.querySelector('.select-sp');
    const selectRS = document.querySelector('.select-rs');
    const selectMG = document.querySelector('.select-mg');

    // Função para exibir o time selecionado com base no estado
    function exibirTimeSelecionado(selectElement, estado) { 
        const selecao = selectElement.value;
        if (selecao === '') {
            window.alert(`ESCOLHA UM TIME DO ${estado}`);
        } else {
            switch (estado) {
                case 'RIO DE JANEIRO':
                    exibirTimeSelecionadoRJ();
                break;
                case 'SÃO PAULO':
                    exibirTimeSelecionadoSP();
                break;
                case 'RIO GRANDE DO SUL':
                    exibirTimeSelecionadoRS();
                break;
                case 'MINAS GERAIS':
                    exibirTimeSelecionadoMG();
                break;
                default:    
                    break;
            }
        }
    }

    // Função para associar a funcionalidade do botão à função de exibição de time
    function addButtonFunctionality(buttonElement, selectElement, estado) {
        buttonElement.addEventListener('click', function () {
            exibirTimeSelecionado(selectElement, estado);
        });
    }   

    // Obtém o botão e adiciona a funcionalidade para o Rio de Janeiro
    const btnExibirRJ = document.getElementById('btn-exibir-rj');
    addButtonFunctionality(btnExibirRJ, selectRJ, 'RIO DE JANEIRO');
    btnExibirRJ.style.background = 'aqua';
    btnExibirRJ.style.color = 'white';

    // Obtém o botão e adiciona a funcionalidade para São Paulo
    const btnExibirSP = document.getElementById('btn-exibir-sp');
    addButtonFunctionality(btnExibirSP, selectSP, 'SÃO PAULO');
    btnExibirSP.style.background = 'black';
    btnExibirSP.style.color = 'white';

    // Obtém o botão e adiciona a funcionalidade para Rio Grande do Sul
    const btnExibirRS = document.getElementById('btn-exibir-rs');
    addButtonFunctionality(btnExibirRS, selectRS, 'RIO GRANDE DO SUL');
    btnExibirRS.style.background = 'green';
    btnExibirRS.style.color = 'yellow';
    btnExibirRS.style.borderColor = 'red';

    // Obtém o botão e adiciona a funcionalidade para Minas Gerais
    const btnExibirMG = document.getElementById('btn-exibir-mg');
    addButtonFunctionality(btnExibirMG, selectMG, 'MINAS GERAIS');
    btnExibirMG.style.background = 'white';
    btnExibirMG.style.color = 'black';
    btnExibirMG.style.borderColor = 'red';

    //Object for TimesRJ
    const timesRJ = {
        "Flamengo": {
            nome: "Clube de Regatas do Flamengo",
            sede: "Gávea - Zona Sul do Rio de Janeiro",
            apelidos: "O mais querido, Time do povo, Urubu",
            estadio: "Maracanã",
            rivais: "Vasco da Gama, Fluminense, Palmeiras e Atlético-MG",
            ano: 1895,
            curiosidade1: "O Flamengo é o time mais popular do Brasil, com mais de 40 Milhões de Torcedores, além de ser o único time carioca campeão mundial, e 3 vezes da libertadores."
            + "O Flamengo também é o maior campeão estadual, e o segundo clube com mais títulos nacionais no país." ,
            curiosidade2: "O Clube tem uma longa rivalidade com o Fluminense, onde fazem o grande Clássico da Cidade, o Clássico FlaxFlu. Apesar de ser o maior rival histórico" + 
            " o Flamengo guarda uma rivalidade/ódio maior com outro time do Rio, o Vasco da Gama, que se chama Clássico dos Milhões, por ser o clássico estadual que mais envolve torcedores no país, essa rivalidade essa que nasceu a partir dos anos 70 e se intensificou por conta das disputas de títulos, confrontos eliminatórios, e domínio de maior time do Rio de Janeiro."
        },
        "Fluminense": {
            nome: "Fluminense Football Club",
            sede: "Laranjeiras - Zona Sul do Rio de Janeiro",
            apelidos: "Tricolor, Time de Guerreiros",
            estadio: "Maracanã",
            rivais: "Flamengo, Vasco da Gama e Botafogo",
            curiosidade1: "O Fluminense é o um dos clubes mais tradicionais do Brasil, a equipe conta com 4 títulos Brasileiros, além de ser o único campeão da taça olímpica do Rio de Janeiro.",
            curiosidade2: " O Fluminense é o maior rival do Flamengo, fazem o clássico mais charmoso da cidade. O Clube também tem uma longa rivalidade com o Vasco da Gama por conta das disputas políticas e sociais.",
            ano: 1902
        },
       "Botafogo": {
            nome: "Botafogo de Futebol e Regatas",
            sede: "Niterói - Município do Rio de Janeiro",
            apelidos: "O mais tradicional, Fogão, Glorioso",
            estadio: "Engenhão e Maracanâ",
            rivais: "Flamengo, Fluminense, Vasco da Gama e Santos",
            curiosidade1: "O Botafogo é tido como o clube mais importante para história da seleção nacional, celeiro de muitos craques como Garrincha e Nilton Santos, além de ser 2 vezes campeão nacional.",
            curiosidade2: " O maior rival do Botafogo é o Flamengo, os clubes tem uma grande rivalidade por conta do jogador Garrincha, e pelas longas decisões. Outros grandes rivais são Fluminense e Santos, rivalidades que cresceram muito a partir dos anos 90/00.",
            ano: 1894,
        },
       "Vasco da Gama": {
            nome: "Club de Regatas Vasco da Gama",
            sede: "Barreira do Vasco - Zona Norte do Rio de Janeiro",
            apelidos: "Gigante da Colina, Time da Virada, Bacalhau",
            estadio: "São Januário e Maracanã",
            rivais: "Flamengo, Fluminense, Cruzeiro e Corinthians",
            curiosidade1: "O Vasco da Gama é tido como o clube com mais história no Brasil, o clube é o primeiro campeão sul-americano do continente e campeão da libertadores no centenário, além de ser o único time do Rio a ter estádio próprio, e ser o primeiro time a lutar pelo direito de Negros e Pobres jogarem futebol. É um dos clubes com mais torcida no País.",
            curiosidade2: " O Vasco é o grande rival do Flamengo no Rio de Janeiro, os dois fazem o Clássico dos Milhões, além do Vasco ter sido até hoje o único time do Rio a ter vencido, e eliminado o Flamengo em competições nacionais. Outro grande rival é o Fluminense e Cruzeiro, por conta das questões políticas e grandes confrontos eliminatórios na Libertadores e Copa do Brasil.",
            ano: 1898
        }
    };

    //Objects for timesSP
    const timesSP = {
        "Corinthians": {
            nome: "Sport Club Corinthians Paulista",
            sede: "Itaquera - Zona Leste de São Paulo",
            apelidos: "Timão, O mais querido, Gavião",
            estadio: "Arena Corinthians",
            rivais: "Palmeiras, São Paulo, Santos e Internacional",
            curiosidade1: "O Corinthians é o time mais popular do estado de São Paulo, é o único bi-campeão do mundial de clubes da FIFA. Além de ser celeiro de diversos craques, como Rivelino, Socrates, Ronaldo Fenômeno, Dida e etc.",
            curiosidade2: " O maior rival do Corinthians é o Palmeiras, os dois clubes fazem o maior clássico da cidade e já decidiram final de brasileiro, semi e quartas de libertadores. O clube também tem uma grande rivalidade com São Paulo e Santos, e fora do estado guarda uma rivalidade com o Internacional, Flamengo e Vasco da Gama.",
            ano: 1910,
        },
        "Palmeiras": {
            nome: "Sociedade Esportiva Palmeiras",
            sede: "Ibirapuera - Zona Leste de São Paulo",
            apelidos: "Porco, Verdão e Palestra",
            estadio: "Allianz Parque",
            rivais: "Corinthians, São Paulo, Santos e Flamengo",
            curiosidade1: "O Palmeiras é o time com mais consquistas nacionais no país. O Time conta com 11 campeonatos brasileiros, 4 copas do brasil e 1 supercopa do brasil. Além de ser 3 vezes campeão da libertadores da américa. É um dos clubes com mais torcida no País.",
            curiosidade2: " O Palmeiras é o maior rival do Corinthians, juntos fazem o maior clássico da Cidade, outros grandes rivais é o São Paulo e Santos, por conta dos grandes confrontos em libertadores e copa do brasil. O clube também guarda uma rivalidade mais recente, com um grande rival carioca o Flamengo, por conta das disputas recentes de títulos e a união de torcida com o Vasco.",
            ano: 1914,
        },
        "São Paulo": {
            nome: "São Paulo Futebol Clube",
            sede: "Morumbi - Zona Oeste de São Paulo",
            apelidos: "Tricolor Paulista, Soberano, Trikas",
            estadio: "Morumbi",
            rivais: "Corinthians, Palmeiras, Santos",
            curiosidade1: "O São Paulo é o time com mais conquistas internacionais no país. O time conta com 3 mundiais, 3 libertadores e 1 sul-americana, além de recopa, conmebol entre outros. É um dos clubes com mais torcida no País.",
            curiosidade2: " O maior rival do São Paulo é o Corinthians, essa rivalidade cresceu muito nos anos 2000, por conta dos grandes enfrentamentos e o enfraquecimento do Palmeiras. O São Paulo também tem uma grande rivalidade local com o Palmeiras, além de ter eliminado o Verdão em 16 oportunidades, e ter perdido em somente 6.",
            ano: 1930,
        },
        "Santos": {
            nome: "Santos Futebol Clube",
            sede: "Santos - Cidade de São Paulo",
            apelidos: "Peixe, Alvinegro do Alçapão",
            estadio: "Vila Belmiro",
            rivais: "Corinthians, Palmeiras, São Paulo e Botafogo",
            curiosidade1: "Santos Futebol Clube é o time conhecido como a melhor base de futebol do país, revelaram craques como Neymar, Diego, Elano, Pelé, Rodrygo entre outros. Além de suas conquistas, que são 2 mundiais e 3 libertadores da américa.",
            curiosidade2: " O maior rival do Santos é o Corinthians e Palmeiras, o motivo da rivalidade com o Palmeiras é por conta dos enfrentamentos entre 2015 a 2020, onde decidiram 4 títulos, o Santos levou a pior em 3, e por isso a raiva dos torcedores hoje, é maior do que com o Corinthians. O clube também tem uma rivalidade interestadual com o Botafogo.",
            ano: 1912,
        }
    };
    
    //Objects for timesRS
    const timesRS = {
        "Grêmio":  {
            nome: "Grêmio Foot-Ball Porto Alegrense",
            sede: "Porto Alegre - Capital do Rio Grande do Sul",
            apelidos: "Imortal, Tricolor Gaúcho e Rei de Copas",
            estadio: "Arena do Grêmio",
            rivais: "Internacional, Flamengo e Cruzeiro",
            curiosidade1: "O Grêmio é um dos clubes mais tradicionais do país em copas, é conhecido como o rei de copas por ter 1 mundial, 3 libertadores e 5 copas do brasil. Além de ser muito importante para a seleção com diversos jogadores revelados pelo time.",
            curiosidade2: "O grande clássico do Sul, é o Gre-Nal. São mais de 100 anos de rivalidade, ódio e muitas disputas de título, além de se ro maior clássico do País. O Grêmio também tem uma longa rivalidade com o Flamengo e Cruzeiro.",
            ano: 1903
        },
        "Internacional": {
            nome: "Sport Club Internacional",
            sede: "Porto Alegre - Capital do Rio Grande do Sul",
            apelidos: "Colorado",
            estadio: "Beira-Rio",
            rivais: "Grêmio, Corinthians e Flamengo",
            curiosidade1: "O Inter como é chamado, tem diversas conquistas importantes. É campeão do mundo, 2 vezes campeão da libertadores e o maior campeão do campeonato brasileiro da região sul do país.",
            curiosidade2: "O grande clássico do Sul, é o Gre-Nal. São mais de 100 anos de rivalidade, ódio e muitas disputas de título, além de se ro maior clássico do País. O maior rival do Inter fora do seu estado, é o Corinthians por conta dos enfrentamentos em 2015 e posteriormente na copa do Brasil.",
            ano: 1909
        },
    }

    //Objects for timesMG
    const timesMG = {
        "Cruzeiro": {
            nome: "Cruzeiro Esporte Clube",
            sede: "Belo Horizonte - Minas Gerais",
            apelidos: "Raposa, Celeste e Cabuloso",
            estadio: "Mineirão",
            rivais: "Atlético-MG, Grêmio, Vasco da Gama e Palmeiras",
            curiosidade1: "O Cruzeiro é o maior campeão da Copa do Brasil, além de ser 4 vezes campeão Brasileiro e 2 da Libertadores. É o time com mais conquistas nacionais e internacionais de Minas Gerais.",
            curiosidade2: " O clássico das multidões é o grande clássico mineiro, o clássico para a região de Belo Horizonte, e divide o Estado. O Cruzeiro tem uma grande rivalidade fora do seu estado também com Palmeiras, Grêmio e Vasco da Gama, esses três clubes tem torcidas aliadas contra a do Cruzeiro.",
            ano: 1921
        },
        "Atlético-MG": {
            nome: "Clube Atlético Mineiro",
            sede: "Belo Horizonte - Minas Gerais",
            apelidos: "Galo, Galo Doido, Alvinegro",
            estadio: "Arena MRV e Mineirão",
            rivais: "Cruzeiro e Flamengo",
            curiosidade1: "O Galo como é chamado, é o maior campeão do campeonato mineiro, dono de uma torcida apaixonada e de muitos craques e títulos como os seus 3 campeonatos brasileiros.",
            curiosidade2: " O clássico das multidões é o grande clássico mineiro, o clássico para a região de Belo Horizonte, e divide o Estado. O Galo, tem um grande algoz fora do seu estado, e ele vem do Rio. O Flamengo é o grande rival do Galo fora do seu estado, com algumas pesquisas indicando inclusive um ódio maior pelo Flamengo do que pelo Cruzeiro.",
            ano: 1908
        }
    }
   
    //Funcao que exibe os times do Rio de Janeiro, recebe as outras funções e exibe na tela
    function exibirTimeSelecionadoRJ() {
        let selecaoAtiva;
        if (selectRJ.value !== "") {
            selecaoAtiva = selectRJ.value;
        }

        divResp.innerHTML = "";

        //Essa const é para a seleção dos times do RJ, sem ela nada é exibido na tela
        const timeSelecionado = timesRJ[selecaoAtiva];
        if (timeSelecionado) {
            //Criação da div que exibe o conteúdo
            const infoDiv = document.createElement('div');
            infoDiv.style.textAlign = "center";
            //Criação do h3 dos clubes
            const nomeHeading = document.createElement('h3');
            nomeHeading.textContent += timeSelecionado.nome;
            nomeHeading.style.textAlign = "center";
            
            const img = document.createElement('img');
            //Estilizando a imagem no JavaScript
            
            img.style.width = '210px';
            img.style.height = '230px';
            img.style.display = 'block';
            img.style.margin = '0 auto';
      
            infoDiv.appendChild(nomeHeading);
            infoDiv.appendChild(img);

            if (selecaoAtiva === "Flamengo") {
                img.src = 'img/flamengo.png';
                section.style.background = 'red';
                nomeHeading.style.color = selecaoAtiva === "Flamengo" ? "red" : "black";
                section.style.transition = 'background 2s';
                infoDiv.style.color = 'black'
                nomeHeading.style.color = 'black';
            } else if(selecaoAtiva === "Fluminense") {
                img.src += 'img/fluminense.png';
                section.style.background = '#8b0000';
                nomeHeading.style.color = selecaoAtiva === "Fluminense" ? "green" : "green";
                section.style.transition = 'background 2s';
                infoDiv.style.color = 'green';
            } else if(selecaoAtiva === "Botafogo"){
                img.src += 'img/botafogo.png';
                section.style.background = 'white';
            } else if(selecaoAtiva === "Vasco da Gama") {
                img.src += 'img/vasco.png';
                section.style.background = 'black';
                section.style.transition = 'background 2s';
                nomeHeading.style.color = selecaoAtiva === "Vasco da Gama" ? "white" : "white";
                infoDiv.style.color = 'white';
            }

            infoDiv.innerHTML += `<br><h3 style="text-align:center"><strong>SOBRE</strong></h3><br>`
            infoDiv.innerHTML += `<p><strong>Sede:</strong> ${timeSelecionado.sede}</p>`;
            infoDiv.innerHTML += `<p><strong>Apelidos:</strong> ${timeSelecionado.apelidos}</p>`;
            infoDiv.innerHTML += `<p><strong>Estádio:</strong> ${timeSelecionado.estadio}</p>`;
            infoDiv.innerHTML += `<p><strong>Rivais:</strong> ${timeSelecionado.rivais}</p>`;
            infoDiv.innerHTML += `<p><strong>Ano de Fundação:</strong> ${timeSelecionado.ano}</p>`;
            infoDiv.innerHTML += `<br><h3 style="text-align:center"><strong>CURIOSIDADES</strong></h3><br>` 
            infoDiv.innerHTML += `<p style="font-size:18px; text-align:justify"><strong>${timeSelecionado.curiosidade1}</strong></p>`;
            infoDiv.innerHTML += `<br><p style="font-size:18px; text-align:justify"><strong>${timeSelecionado.curiosidade2}</strong></p>`;
            divResp.appendChild(infoDiv);

        } else {
            divResp.innerHTML = "";
            const nomeParagrafo = document.createElement('p');
            nomeParagrafo.textContent = selecaoAtiva;
            divResp.appendChild(nomeParagrafo);

        }
    }

    //Funcao que exibe os times de São Paulo, recebe as outras funções e exibe na tela
    function exibirTimeSelecionadoSP() {
        let selecaoAtiva;
        if (selectSP.value !== "") {
            selecaoAtiva = selectSP.value;
        }

        divResp.innerHTML = "";

         const timeSelecionado = timesSP[selecaoAtiva];
         if (timeSelecionado) {
            divResp.innerHTML = "";
            //Criação da div que exibe o conteúdo
            const infoDiv = document.createElement('div');
            infoDiv.style.textAlign = "center";
            //Criação do h3 dos clubes
            const nomeHeading = document.createElement('h3');
            nomeHeading.textContent += timeSelecionado.nome;
            nomeHeading.style.textAlign = "center";
            
            const img = document.createElement('img');
            //Estilizando a imagem no JavaScript
            
            img.style.width = '260px';
            img.style.height = '250px';
            img.style.display = 'block';
            img.style.margin = '0 auto';
      
            infoDiv.appendChild(nomeHeading);
            infoDiv.appendChild(img);  

            if (selecaoAtiva === "Corinthians") {
                img.src = 'img/corinthians.png';  // Corrija o caminho da imagem
                section.style.background = 'white';
                infoDiv.style.color = 'black';  // Defina uma cor de texto legível
                nomeHeading.style.color = 'black';
                section.style.transition = 'background 2s';
            } else if (selecaoAtiva === "Palmeiras") {
                img.src = 'img/palmeiras.png';
                section.style.background = 'green';
                section.style.transition = 'background 2s';
                infoDiv.style.color = 'white'; 
                nomeHeading.style.color = 'white';
            } else if(selecaoAtiva === "São Paulo") {
                img.src = 'img/sp.png';
                img.style.width = '450px';
                img.style.height = '450px';
                img.style.display = 'block';
                img.style.margin = '0 auto';
                section.style.background = 'red';
                section.style.transition = 'background 2s';
                infoDiv.style.color = 'white';
                nomeHeading.style.color = 'white';
            }
            else {
                img.src = 'img/santos.png';  // Corrija o caminho da imagem
                section.style.background = 'white';
                section.style.transition = 'background 2s';
                infoDiv.style.color = 'black';  // Defina uma cor de texto legível
            }
            infoDiv.innerHTML += `<br><h3 style="text-align:center"><strong>SOBRE</strong></h3><br>`
            infoDiv.innerHTML += `<p><strong>Sede:</strong> ${timeSelecionado.sede}</p>`;
            infoDiv.innerHTML += `<p><strong>Apelidos:</strong> ${timeSelecionado.apelidos}</p>`;
            infoDiv.innerHTML += `<p><strong>Estádio:</strong> ${timeSelecionado.estadio}</p>`;
            infoDiv.innerHTML += `<p><strong>Rivais:</strong> ${timeSelecionado.rivais}</p>`;
            infoDiv.innerHTML += `<p><strong>Ano de Fundação:</strong> ${timeSelecionado.ano}</p>`;
            infoDiv.innerHTML += `<br><h3 style="text-align:center"><strong>CURIOSIDADES</strong></h3><br>`
            infoDiv.innerHTML += `<p style="font-size:18px; text-align:justify"><strong>${timeSelecionado.curiosidade1}</strong></p>`
            infoDiv.innerHTML += `<br><p style="font-size:18px; text-align:justify"><strong>${timeSelecionado.curiosidade2}</strong></p>`;
            divResp.appendChild(infoDiv);

        } else {
            divResp.innerHTML = "";
            const nomeParagrafo = document.createElement('p');
            nomeParagrafo.textContent = selecaoAtiva;
            divResp.appendChild(nomeParagrafo);
        }
    }

     //Funcao que exibe os times do Rio Grande do Sul, recebe as outras funções e exibe na tela
    function exibirTimeSelecionadoRS() {
        let selecaoAtiva;
        if(selectRS.value !== "") {
            selecaoAtiva = selectRS.value;
        }

        divResp.innerHTML = "";

        const timeSelecionado = timesRS[selecaoAtiva];
        if (timeSelecionado) {
             //Criação da div que exibe o conteúdo
             const infoDiv = document.createElement('div');
             infoDiv.style.textAlign = "center";
             //Criação do h3 dos clubes
             const nomeHeading = document.createElement('h3');
             nomeHeading.textContent += timeSelecionado.nome;
             nomeHeading.style.textAlign = "center";
             
             const img = document.createElement('img');
             //Estilizando a imagem no JavaScript
             
             img.style.width = '250px';
             img.style.height = '250px';
             img.style.display = 'block';
             img.style.margin = '0 auto';
       
             infoDiv.appendChild(nomeHeading);
             infoDiv.appendChild(img);
            
             if (selecaoAtiva === "Grêmio") {
                img.src = 'img/gremio.webp';  // Corrija o caminho da imagem
                section.style.background = '#0000CD';
                infoDiv.style.color = 'white';  // Defina uma cor de texto legível
                nomeHeading.style.color = 'white';
                section.style.transition = 'background 2s';
            } else if (selecaoAtiva === "Internacional") {
                img.src = 'img/internacional.webp';
                section.style.background = '#e3050e';
                section.style.transition = 'background 2s';
                infoDiv.style.color = 'white'; 
                nomeHeading.style.color = 'white';
            }

            infoDiv.innerHTML += `<br><h3 style="text-align:center"><strong>SOBRE</strong></h3><br>`
            infoDiv.innerHTML += `<p><strong>Sede:</strong> ${timeSelecionado.sede}</p>`;
            infoDiv.innerHTML += `<p><strong>Apelidos:</strong> ${timeSelecionado.apelidos}</p>`;
            infoDiv.innerHTML += `<p><strong>Estádio:</strong> ${timeSelecionado.estadio}</p>`;
            infoDiv.innerHTML += `<p><strong>Rivais:</strong> ${timeSelecionado.rivais}</p>`;
            infoDiv.innerHTML += `<p><strong>Ano de Fundação:</strong> ${timeSelecionado.ano}</p>`;
            infoDiv.innerHTML += `<br><h3 style="text-align:center"><strong>CURIOSIDADES</strong></h3><br>`
            infoDiv.innerHTML += `<p style="font-size:18px; text-align:justify"><strong>${timeSelecionado.curiosidade1}</strong></p>`
            infoDiv.innerHTML += `<br><p style="font-size:18px; text-align:justify"><strong>${timeSelecionado.curiosidade2}</strong></p>`;
            divResp.appendChild(infoDiv);

        } else {
            divResp.innerHTML = "";
            const nomeParagrafo = document.createElement('p');
            nomeParagrafo.textContent = selecaoAtiva;
            divResp.appendChild(nomeParagrafo);
        }
    }

    //Funcao que exibe os times de Minas Gerais, recebe as outras funções e exibe na tela
    function exibirTimeSelecionadoMG() {
        let selecaoAtiva;
        if(selectMG.value !== "") {
            selecaoAtiva = selectMG.value;
        }

        divResp.innerHTML = "";

        const timeSelecionado = timesMG[selecaoAtiva];
        if (timeSelecionado) {
             //Criação da div que exibe o conteúdo
             const infoDiv = document.createElement('div');
             infoDiv.style.textAlign = "center";
             //Criação do h3 dos clubes
             const nomeHeading = document.createElement('h3');
             nomeHeading.textContent += timeSelecionado.nome;
             nomeHeading.style.textAlign = "center";
             
             const img = document.createElement('img');
             //Estilizando a imagem no JavaScript
             
             img.style.width = '200px';
             img.style.display = 'block';
             img.style.margin = '0 auto';
       
             infoDiv.appendChild(nomeHeading);
             infoDiv.appendChild(img);
            
             if (selecaoAtiva === "Cruzeiro") {
                img.src = 'img/cruzeiro.webp';  // Corrija o caminho da imagem
                section.style.background = '#1c3c8c';
                infoDiv.style.color = 'white';  // Defina uma cor de texto legível
                nomeHeading.style.color = 'white';
                section.style.transition = 'background 2s';
                img.style.width = '280px';
                img.style.height = '250px';
                img.style.display = 'block';
                img.style.margin = '0 auto';
       
            } else if (selecaoAtiva === "Atlético-MG") {
                img.src = 'img/atletico.png';
                section.style.background = 'white';
                section.style.transition = 'background 2s';
                infoDiv.style.color = 'black'; 
                nomeHeading.style.color = 'black';
            }

            infoDiv.innerHTML += `<br><h3 style="text-align:center"><strong>SOBRE</strong></h3><br>`
            infoDiv.innerHTML += `<p><strong>Sede:</strong> ${timeSelecionado.sede}</p>`;
            infoDiv.innerHTML += `<p><strong>Apelidos:</strong> ${timeSelecionado.apelidos}</p>`;
            infoDiv.innerHTML += `<p><strong>Estádio:</strong> ${timeSelecionado.estadio}</p>`;
            infoDiv.innerHTML += `<p><strong>Rivais:</strong> ${timeSelecionado.rivais}</p>`;
            infoDiv.innerHTML += `<p><strong>Ano de Fundação:</strong> ${timeSelecionado.ano}</p>`;
            infoDiv.innerHTML += `<br><h3 style="text-align:center"><strong>CURIOSIDADES</strong></h3><br>`
            infoDiv.innerHTML += `<p style="font-size:18px; text-align:justify"><strong>${timeSelecionado.curiosidade1}</strong></p>`;
            infoDiv.innerHTML += `<br><p style="font-size:18px; text-align:justify"><strong>${timeSelecionado.curiosidade2}</strong></p>`;
            divResp.appendChild(infoDiv);

        } else {
            divResp.innerHTML = "";
            const nomeParagrafo = document.createElement('p');
            nomeParagrafo.textContent = selecaoAtiva;
            divResp.appendChild(nomeParagrafo);
        }
    }
});

    
