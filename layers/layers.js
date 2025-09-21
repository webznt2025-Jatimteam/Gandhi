var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_OSMRoadMadiun_3 = new ol.format.GeoJSON();
var features_OSMRoadMadiun_3 = format_OSMRoadMadiun_3.readFeatures(json_OSMRoadMadiun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSMRoadMadiun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSMRoadMadiun_3.addFeatures(features_OSMRoadMadiun_3);
var lyr_OSMRoadMadiun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSMRoadMadiun_3, 
                style: style_OSMRoadMadiun_3,
                popuplayertitle: 'OSM Road Madiun',
                interactive: true,
    title: 'OSM Road Madiun<br />\
    <img src="styles/legend/OSMRoadMadiun_3_0.png" /> motorway<br />\
    <img src="styles/legend/OSMRoadMadiun_3_1.png" /> primary<br />\
    <img src="styles/legend/OSMRoadMadiun_3_2.png" /> secondary<br />\
    <img src="styles/legend/OSMRoadMadiun_3_3.png" /> tertiary<br />\
    <img src="styles/legend/OSMRoadMadiun_3_4.png" /> trunk<br />\
    <img src="styles/legend/OSMRoadMadiun_3_5.png" /> unclassified<br />\
    <img src="styles/legend/OSMRoadMadiun_3_6.png" /> motorway_link<br />\
    <img src="styles/legend/OSMRoadMadiun_3_7.png" /> path<br />\
    <img src="styles/legend/OSMRoadMadiun_3_8.png" /> residential<br />\
    <img src="styles/legend/OSMRoadMadiun_3_9.png" /> service<br />\
    <img src="styles/legend/OSMRoadMadiun_3_10.png" /> tertiary_link<br />\
    <img src="styles/legend/OSMRoadMadiun_3_11.png" /> track<br />\
    <img src="styles/legend/OSMRoadMadiun_3_12.png" /> trunk_link<br />\
    <img src="styles/legend/OSMRoadMadiun_3_13.png" /> <br />' });
var format_Gandhi_4 = new ol.format.GeoJSON();
var features_Gandhi_4 = format_Gandhi_4.readFeatures(json_Gandhi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gandhi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gandhi_4.addFeatures(features_Gandhi_4);
var lyr_Gandhi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gandhi_4, 
                style: style_Gandhi_4,
                popuplayertitle: 'Gandhi',
                interactive: true,
    title: 'Gandhi<br />\
    <img src="styles/legend/Gandhi_4_0.png" /> 1<br />\
    <img src="styles/legend/Gandhi_4_1.png" /> 2<br />\
    <img src="styles/legend/Gandhi_4_2.png" /> 3<br />\
    <img src="styles/legend/Gandhi_4_3.png" /> 4<br />\
    <img src="styles/legend/Gandhi_4_4.png" /> 5<br />\
    <img src="styles/legend/Gandhi_4_5.png" /> 6<br />\
    <img src="styles/legend/Gandhi_4_6.png" /> 7<br />\
    <img src="styles/legend/Gandhi_4_7.png" /> 8<br />\
    <img src="styles/legend/Gandhi_4_8.png" /> 9<br />\
    <img src="styles/legend/Gandhi_4_9.png" /> 10<br />\
    <img src="styles/legend/Gandhi_4_10.png" /> 11<br />\
    <img src="styles/legend/Gandhi_4_11.png" /> 12<br />\
    <img src="styles/legend/Gandhi_4_12.png" /> 13<br />\
    <img src="styles/legend/Gandhi_4_13.png" /> 14<br />\
    <img src="styles/legend/Gandhi_4_14.png" /> 15<br />\
    <img src="styles/legend/Gandhi_4_15.png" /> 16<br />\
    <img src="styles/legend/Gandhi_4_16.png" /> 17<br />\
    <img src="styles/legend/Gandhi_4_17.png" /> 18<br />\
    <img src="styles/legend/Gandhi_4_18.png" /> 19<br />\
    <img src="styles/legend/Gandhi_4_19.png" /> 20<br />\
    <img src="styles/legend/Gandhi_4_20.png" /> 21<br />\
    <img src="styles/legend/Gandhi_4_21.png" /> 22<br />\
    <img src="styles/legend/Gandhi_4_22.png" /> 23<br />\
    <img src="styles/legend/Gandhi_4_23.png" /> 24<br />\
    <img src="styles/legend/Gandhi_4_24.png" /> 25<br />\
    <img src="styles/legend/Gandhi_4_25.png" /> 26<br />\
    <img src="styles/legend/Gandhi_4_26.png" /> 27<br />\
    <img src="styles/legend/Gandhi_4_27.png" /> 28<br />\
    <img src="styles/legend/Gandhi_4_28.png" /> 29<br />\
    <img src="styles/legend/Gandhi_4_29.png" /> 30<br />\
    <img src="styles/legend/Gandhi_4_30.png" /> 31<br />\
    <img src="styles/legend/Gandhi_4_31.png" /> 32<br />\
    <img src="styles/legend/Gandhi_4_32.png" /> 33<br />\
    <img src="styles/legend/Gandhi_4_33.png" /> 34<br />\
    <img src="styles/legend/Gandhi_4_34.png" /> 35<br />\
    <img src="styles/legend/Gandhi_4_35.png" /> 36<br />\
    <img src="styles/legend/Gandhi_4_36.png" /> 37<br />\
    <img src="styles/legend/Gandhi_4_37.png" /> 38<br />\
    <img src="styles/legend/Gandhi_4_38.png" /> 39<br />\
    <img src="styles/legend/Gandhi_4_39.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_OSMRoadMadiun_3.setVisible(true);lyr_Gandhi_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_GoogleMaps_2,lyr_OSMRoadMadiun_3,lyr_Gandhi_4];
lyr_OSMRoadMadiun_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Gandhi_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NOZN': 'NOZN', 'PENGGUNAAN': 'PENGGUNAAN', 'SMPBKREL': 'SMPBKREL', 'SMPBAKU': 'SMPBAKU', 'NILAIZN': 'NILAIZN', 'JMLSMPL': 'JMLSMPL', 'NILMIN': 'NILMIN', 'NILMAKS': 'NILMAKS', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'THNNILAI': 'THNNILAI', 'cluster': 'cluster', 'JNSZN': 'JNSZN', 'Luas_M2': 'Luas_M2', 'HISTZONE': 'HISTZONE', 'Legenda': 'Legenda', });
lyr_OSMRoadMadiun_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Gandhi_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NOZN': 'TextEdit', 'PENGGUNAAN': 'TextEdit', 'SMPBKREL': 'TextEdit', 'SMPBAKU': 'TextEdit', 'NILAIZN': 'TextEdit', 'JMLSMPL': 'TextEdit', 'NILMIN': 'TextEdit', 'NILMAKS': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'THNNILAI': 'TextEdit', 'cluster': 'TextEdit', 'JNSZN': 'Range', 'Luas_M2': 'TextEdit', 'HISTZONE': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_OSMRoadMadiun_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Gandhi_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'NOZN': 'inline label - always visible', 'PENGGUNAAN': 'inline label - always visible', 'SMPBKREL': 'hidden field', 'SMPBAKU': 'hidden field', 'NILAIZN': 'hidden field', 'JMLSMPL': 'hidden field', 'NILMIN': 'hidden field', 'NILMAKS': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'THNNILAI': 'hidden field', 'cluster': 'hidden field', 'JNSZN': 'hidden field', 'Luas_M2': 'inline label - always visible', 'HISTZONE': 'inline label - always visible', 'Legenda': 'no label', });
lyr_Gandhi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});