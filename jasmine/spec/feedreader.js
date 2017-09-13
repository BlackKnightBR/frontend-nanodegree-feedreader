$(function() {
    describe('RSS Feeds', function() {

        it('Are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Testes de URLs.
        it('Should check all the urls and validate existance of content', function() {
          //Loop que passa por toda variável allFeeds e verifica a existência de um "campo" url
          //e garante que exista conteúdo.
          for (var i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url.length).not.toBe(0);
          }
        });
        //Testes de Nomes.
        it('Should check all the names and validate existance of content', function() {
          //Loop que passa por toda variável allFeeds e verifica a existência de um "campo" name
          //e garante que exista conteúdo.
          for (var i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name.length).not.toBe(0);
          }
        });
    });

    //Suite de teste do menu e suas funcionalidades.
    describe('The Menu',function() {
      //Variáveis, 'body' é associada ao corpo do html e 'iconMenu'
      //é associada ao ícone de menu.
       var body = $('body'),
       iconMenu = $('.menu-icon-link');
    //Teste para verificar se por padrão o menu permanece escondido.
    it('Hidden by default', function() {
      expect(body.hasClass('menu-hidden')).toBe(true);
    });
    //Teste para verificar se o status de visibilidade realmente muda quando o
    //menu é clickado.
    it('Visibility changes when clicked', function() {
      //Variáveis, 'defaultClass' guarda atributo de classe atual de menu(definida por padrão) e
      //'newClass' guarda teste de atributo que o menu vai assumir (oposto ao padrão sempre!).
      var defaultClass = body.attr('class')
          newClass = (body.hasClass('menu-hidden')) ? '' : 'menu-hidden';
      //Determina se o estado do menu é a nova classe definida na variável
      //'newClass' após primeiro click.
      iconMenu.click();
      expect(body.attr('class')).toBe(newClass);

      //Determina se a o estado do menu é a classe definida por padrão (defaultClass)
      //após segundo click.
      iconMenu.click();
      expect(body.attr('class')).toBe(defaultClass);
    });
  });

  describe('Initial Entries',function() {
    //Assegura carregamento de loadFeed.
      beforeEach(function(done) {
        loadFeed(0, function() {
        done();
        });
      });
      //Testa para saber se pelo menos existe uma entrie no feed.
      it('Have at least one entry', function(done) {
        //Após carregamento de feed, guarda na variável 'numEntries' o
        // tamanho de entradas no feed.
        var numEntries = $('.feed .entry').length;
        //Verifica se realmente o valor de entradas é maior que zero.
        expect(numEntries).toBeGreaterThan(0);
        done();
      });
    });

    describe('New Feed Selection',function() {
      //Variável que vai referenciar o conteúdo do feed.
      var currentContent;

      beforeEach(function(done) {
        //Atribuição de elemento 'feed' a variável 'currentContent'.
        currentContent = $('.feed').html();
        //Assegura carregamento do feed e independência de suites anteriores.
        loadFeed(1, function() {
          done();
        });
      });
      //Verifica se novo conteúdo é diferente do conteúdo anterior.
      it('Changes the content displayed', function(done) {
        //Referência conteudo de 'feed' a variável 'newContent'.
        var newContent = $('.feed').html();
        //Testa para que os conteúdos sejam diferentes.
        expect(currentContent).not.toBe(newContent);
        done();
      });
    });

}());
