// Ex 4
        function somarEx4() {
            let n1 = document.getElementById('num1-ex4').value;
            let n2 = document.getElementById('num2-ex4').value;
            let msg = document.getElementById('msg-ex4');
            if(!n1 || !n2) msg.innerHTML = '<span class="error">Preencha os dois campos!</span>';
            else msg.innerHTML = `Resultado: ${parseFloat(n1) + parseFloat(n2)}`;
        }

        // Ex 5
        function boasVindasEx5() {
            let nome = document.getElementById('nome-ex5').value;
            let msg = document.getElementById('msg-ex5');
            if(!nome) msg.innerHTML = '<span class="error">O campo nome não pode estar vazio!</span>';
            else msg.innerHTML = `Bem-vindo(a), ${nome}!`;
        }

        // Ex 6
        function cadastrarEx6() {
            let n = document.getElementById('nome-ex6').value;
            let e = document.getElementById('email-ex6').value;
            let s = document.getElementById('senha-ex6').value;
            let erro = document.getElementById('erro-ex6');
            if(!n || !e || !s) erro.innerText = "Preencha todos os campos!";
            else {
                document.getElementById('form-ex6').classList.add('hidden');
                document.getElementById('msg-ex6').classList.remove('hidden');
                erro.innerText = "";
            }
        }

        // Ex 7
        function areaVipEx7() {
            let nome = document.getElementById('nome-ex7').value;
            let erro = document.getElementById('erro-ex7');
            let img = document.getElementById('img-ex7');
            if(!nome) {
                erro.innerText = "Informe seu nome para acessar!";
                img.classList.add('hidden');
            } else {
                erro.innerText = "";
                img.classList.remove('hidden');
            }
        }

        // Ex 8
        function calcularAreaEx8() {
            let b = document.getElementById('base-ex8').value;
            let a = document.getElementById('altura-ex8').value;
            let msg = document.getElementById('msg-ex8');
            if(!b || !a) msg.innerHTML = '<span class="error">Preencha base e altura!</span>';
            else msg.innerHTML = `A área é: ${parseFloat(b) * parseFloat(a)}`;
        }

        // Ex 9
        function criarPerfilEx9() {
            let n = document.getElementById('nome-ex9').value;
            let i = document.getElementById('idade-ex9').value;
            if(n && i) document.getElementById('msg-ex9').innerHTML = `Jogador: ${n} <br> Idade: ${i} anos`;
        }

        // Ex 11
        function calcularImcEx11() {
            let p = document.getElementById('peso-ex11').value;
            let a = document.getElementById('altura-ex11').value;
            let msg = document.getElementById('msg-ex11');
            if(!p || !a) msg.innerHTML = '<span class="error">Preencha peso e altura!</span>';
            else {
                let imc = parseFloat(p) / (parseFloat(a) * parseFloat(a));
                msg.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
            }
        }

        // Ex 12
        function gerarConviteEx12() {
            let n = document.getElementById('nome-ex12').value;
            if(n) document.getElementById('msg-ex12').innerText = `${n} foi convidado para o evento.`;
        }

        // Ex 13
        function mostrarInfoEx13(num) {
            document.getElementById('info1-ex13').classList.add('hidden');
            document.getElementById('info2-ex13').classList.add('hidden');
            document.getElementById('info3-ex13').classList.add('hidden');
            document.getElementById(`info${num}-ex13`).classList.remove('hidden');
        }

        // Ex 14
        function comprarEx14() {
            let prod = document.getElementById('produto-ex14').value;
            let qtd = document.getElementById('qtd-ex14').value;
            let preco = document.getElementById('preco-ex14').value;
            let msg = document.getElementById('msg-ex14');
            if(!prod || !qtd || !preco) msg.innerHTML = '<span class="error">Preencha todos os campos!</span>';
            else msg.innerHTML = `Valor total da compra de ${prod}: R$ ${(parseFloat(qtd) * parseFloat(preco)).toFixed(2)}`;
        }

        // Ex 15
        function finalizarEx15() {
            let n = document.getElementById('nome-ex15').value;
            let e = document.getElementById('email-ex15').value;
            let c = document.getElementById('cidade-ex15').value;
            let erro = document.getElementById('erro-ex15');
            if(!n || !e || !c) erro.innerText = "Preencha todos os campos!";
            else {
                document.getElementById('form-ex15').classList.add('hidden');
                let resumo = document.getElementById('resumo-ex15');
                resumo.innerHTML = `<strong>Resumo do Cadastro:</strong><br>Nome: ${n}<br>E-mail: ${e}<br>Cidade: ${c}`;
                resumo.classList.remove('hidden');
            }
        }