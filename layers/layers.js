var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_areaperumahan_1 = new ol.format.GeoJSON();
var features_areaperumahan_1 = format_areaperumahan_1.readFeatures(json_areaperumahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areaperumahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areaperumahan_1.addFeatures(features_areaperumahan_1);
var lyr_areaperumahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areaperumahan_1, 
                style: style_areaperumahan_1,
                popuplayertitle: 'area perumahan',
                interactive: true,
                title: '<img src="styles/legend/areaperumahan_1.png" /> area perumahan'
            });
var format_pepohonan_2 = new ol.format.GeoJSON();
var features_pepohonan_2 = format_pepohonan_2.readFeatures(json_pepohonan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pepohonan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pepohonan_2.addFeatures(features_pepohonan_2);
var lyr_pepohonan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pepohonan_2, 
                style: style_pepohonan_2,
                popuplayertitle: 'pepohonan',
                interactive: true,
                title: '<img src="styles/legend/pepohonan_2.png" /> pepohonan'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_lapangan_4 = new ol.format.GeoJSON();
var features_lapangan_4 = format_lapangan_4.readFeatures(json_lapangan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan_4.addFeatures(features_lapangan_4);
var lyr_lapangan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan_4, 
                style: style_lapangan_4,
                popuplayertitle: 'lapangan',
                interactive: true,
                title: '<img src="styles/legend/lapangan_4.png" /> lapangan'
            });
var format_taman_5 = new ol.format.GeoJSON();
var features_taman_5 = format_taman_5.readFeatures(json_taman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_taman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_taman_5.addFeatures(features_taman_5);
var lyr_taman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_taman_5, 
                style: style_taman_5,
                popuplayertitle: 'taman',
                interactive: true,
                title: '<img src="styles/legend/taman_5.png" /> taman'
            });
var format_Rumah_6 = new ol.format.GeoJSON();
var features_Rumah_6 = format_Rumah_6.readFeatures(json_Rumah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_6.addFeatures(features_Rumah_6);
var lyr_Rumah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_6, 
                style: style_Rumah_6,
                popuplayertitle: 'Rumah',
                interactive: true,
    title: 'Rumah<br />\
    <img src="styles/legend/Rumah_6_0.png" /> Rumah kavling<br />\
    <img src="styles/legend/Rumah_6_1.png" /> Masjid<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_areaperumahan_1.setVisible(true);lyr_pepohonan_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_lapangan_4.setVisible(true);lyr_taman_5.setVisible(true);lyr_Rumah_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_areaperumahan_1,lyr_pepohonan_2,lyr_Jalan_3,lyr_lapangan_4,lyr_taman_5,lyr_Rumah_6];
lyr_areaperumahan_1.set('fieldAliases', {'id': 'id', });
lyr_pepohonan_2.set('fieldAliases', {'id': 'id', });
lyr_Jalan_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_lapangan_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_taman_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Rumah_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'status': 'status', 'luas': 'luas', });
lyr_areaperumahan_1.set('fieldImages', {'id': 'TextEdit', });
lyr_pepohonan_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjang': '', });
lyr_lapangan_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_taman_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Rumah_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'status': 'TextEdit', 'luas': 'TextEdit', });
lyr_areaperumahan_1.set('fieldLabels', {'id': 'hidden field', });
lyr_pepohonan_2.set('fieldLabels', {'id': 'hidden field', });
lyr_Jalan_3.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'panjang': 'inline label - always visible', });
lyr_lapangan_4.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_taman_5.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_Rumah_6.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'status': 'hidden field', 'luas': 'inline label - always visible', });
lyr_Rumah_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});