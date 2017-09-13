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

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries',function() {
        beforeEach(function(done) {
          loadFeed(0, function() {
            done();
          });
        });

        it('have at least one entry', function(done) {
          var numEntries = $('.feed .entry').length;
          console.log(numEntries);
          expect(numEntries).toBeGreaterThan(0);
          done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

}());
