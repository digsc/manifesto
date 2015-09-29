var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, firstCollection, firstManifest;

describe('#loadsPottersElectric', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.potterselectric).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#firstCollection', function() {
    it('has a first collection', function(done) {
        manifest.getCollectionByIndex(0).then(function(data) {
            firstCollection = data;
            expect(firstCollection).to.exist;
            done();
        });
    })
});

describe('#firstCollectioHasFirstManifest', function() {
    it('has a first manifest', function (done) {
        firstCollection.getManifestByIndex(0).then(function(data) {
            firstManifest = data;
            expect(firstManifest).to.exist;
            done();
        });
    })
});