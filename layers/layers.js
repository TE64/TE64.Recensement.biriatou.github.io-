var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BANBIRIATOU_2 = new ol.format.GeoJSON();
var features_BANBIRIATOU_2 = format_BANBIRIATOU_2.readFeatures(json_BANBIRIATOU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANBIRIATOU_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANBIRIATOU_2.addFeatures(features_BANBIRIATOU_2);
var lyr_BANBIRIATOU_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANBIRIATOU_2, 
                style: style_BANBIRIATOU_2,
                interactive: true,
    title: 'BAN BIRIATOU<br />\
    <img src="styles/legend/BANBIRIATOU_2_0.png" /> District 7<br />\
    <img src="styles/legend/BANBIRIATOU_2_1.png" /> District 8<br />\
    <img src="styles/legend/BANBIRIATOU_2_2.png" /> District 9<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_BANBIRIATOU_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_BANBIRIATOU_2];
lyr_BANBIRIATOU_2.set('fieldAliases', {'voie_nom': 'voie_nom', 'lieudit_co': 'lieudit_co', 'numero': 'numero', 'commune_in': 'commune_in', 'commune_no': 'commune_no', 'voie_nom_f': 'voie_nom_f', 'voie_nom_e': 'voie_nom_e', 'DISTRICT': 'DISTRICT', 'Adresse': 'Adresse', });
lyr_BANBIRIATOU_2.set('fieldImages', {'voie_nom': 'Hidden', 'lieudit_co': 'Hidden', 'numero': 'Hidden', 'commune_in': 'Hidden', 'commune_no': 'TextEdit', 'voie_nom_f': 'Hidden', 'voie_nom_e': 'Hidden', 'DISTRICT': 'Hidden', 'Adresse': 'TextEdit', });
lyr_BANBIRIATOU_2.set('fieldLabels', {'commune_no': 'no label', 'Adresse': 'no label', });
lyr_BANBIRIATOU_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});