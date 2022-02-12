const { test } = QUnit;

QUnit.module("Felület tesztelése", function () {
    
    test("léteznek-e metodusaink?", function (assert) {
      assert.ok(nevkiir, "létezik a névkiir!");
      assert.ok(atalakit, "létezik az atalakit!");
 
    })
    
    test("függvények-e?", function (assert) {
        assert.ok(typeof nevkiir === 'function', "létezik a függvény névkiir!");
       
    })
    test("névátalakít - nincs név", function (assert) {
        assert.equal(atalakit(''), '')
       
    })
    test("névátalakít - kéttagú név", function (assert) {
        assert.equal(atalakit('Kis Géza'), ['Kis', 'Géza'].join(','))
       
    })
    test("névátalakít - Háromtagú név", function (assert) {
        assert.equal(atalakit('Kis Géza Ede'), ['Kis', 'Géza', 'Ede'].join(','))
       
    })
    test("névátalakít - beviteli mezőből vett névvel", function (assert) {
        const szuloelem = $( '#qunit-fixture input')
        assert.equal(atalakit(szuloelem.eq(0).val()), ['Kis', 'Géza'].join(','),
        (szuloelem.eq(1).val()), ['Dr.', 'Nagy', 'Géza'].join(','),
        )
    })
    test("névátalakít - P tag érétke", function (assert) {
        const szuloelem = $( '#qunit-fixture input')
        nevkiir();
        assert.ok($(".eredmeny p").length, 2);
        assert.ok($(".eredmeny p").eq(0).html(), 'Kis'),
        assert.ok($(".eredmeny p").eq(1).html(), 'Géza')
        
    })

    });