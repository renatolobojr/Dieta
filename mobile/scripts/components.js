//componentes globais do cabeçalho

Vue.component('capa', {
  template:`
        <div  Class="topo">
            <div style="padding: 5px;background-color: rgba(235, 232, 232, 0.5)">
                <H1>Real Talk <br> Diet Plans</H1>
                <p><strong> Monte sua dieta <br> sem frescuras</strong></p>
            </div>
        </div>
  `
})

Vue.component('meu-menu', {
  template: `
                  <Nav class="pure-menu pure-menu-horizontal">
                      <!-- this is where our nav menu will go -->
                      <a href="#" class="pure-menu-heading pure-menu-link">RT </a>

                      <ul class="pure-menu-list">

                          <li class="pure-menu-item"> <a href="#" class="pure-menu-link">Blog</a></li>

                          <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                              <a href="#" id="menuLink1" class="pure-menu-link">Dieta</a>
                              <ul class="pure-menu-children">
                                  <li class="pure-menu-item"><a href="#" class="pure-menu-link">Calculadoras</a></li>
                                  <li class="pure-menu-item"><a href="#" class="pure-menu-link">Diet Plans</a></li>
                                  <li class="pure-menu-item"><a href="#" class="pure-menu-link">Personalize</a></li>
                              </ul>
                          </li>

                          <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                              <a href="#" id="menuLink1" class="pure-menu-link">Contatos</a>
                              <ul class="pure-menu-children">
                                  <li class="pure-menu-item"> <a href="#" class="pure-menu-link">Redes Sociais</a></li>
                                  <li class="pure-menu-item"> <a href="#" class="pure-menu-link">Parceiros</a> </li>
                                  <li class="pure-menu-item"> <a href="#" class="pure-menu-link">Trabalhe conosco</a> </li>
                                  <li class="pure-menu-item"> <a href="#" class="pure-menu-link">reporte um erro</a> </li>
                              </ul>
                          </li>


                          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sobre</a></li>

                      </ul>

                  </Nav>
      `
})

new Vue({ el: '#top'})



//componentes globais da tag main

Vue.component('calculadora', {
  template: `
            <div>

                <p>Sexo:
                              <input type="radio" name="radsex" id="masc" checked>
                              <label for="masc">Masculino</label>
                              <input type="radio" name="radsex" id="fem" checked>
                              <label for="fem">Feminino</label>
                          <p>Idade:
                              <input type="number" name="txtidade" id="txtidade">Anos
                          <p>Peso:
                              <input type="number" name="txtpeso" id="txtpeso">Kg
                          <p>Altura:
                              <input type="number" name="txtaltura" id="txtaltura"> cm
                          <p>Fator de Atividade:
                              <input type="radio" name="radact" id="sedentario">
                              <label for="sedentario">Sedentario</label>
                              <input type="radio" name="radact" id="Pouco ativo" checked>
                              <label for="pouco ativo">Pouco Ativo</label>
                              <input type="radio" name="radact" id="ativo">
                              <label for="ativo">Ativo</label>
                              <input type="radio" name="radact" id="muito ativo" checked>
                              <label for="muito ativo">Muito Ativo</label>

                          </p>
                          <p>
                              <input type="button" value="Calcular" onclick="calcular()">
                          </p>
                          </p>
              </div>
    `,
  data: {

  }
})

new Vue({ el: '#main',

  data: {
    message: 'Calculadora para medir TMB'
  }
})




//componente local do rodape
var _rodape = {template: `
<div class="footer">
<p>
    <strong> Real Talk Diet Plans</strong> by <a href="https://github.com/renatolobojr">Renato</a> and <a
        href="https://github.com/TarcisioCarvalho">Tarcísio</a>. <br>
        The source code is licensed
    <a href="https://github.com/TarcisioCarvalho/Dieta/blob/main/LICENSE">MIT</a>. <br> The website's repository
    in <a href="https://github.com/TarcisioCarvalho/Dieta">GitHub</a>.
</p>
</div>
`,}

new Vue({ el: '#bot',
          components:{
            'rodape' : _rodape
          }})