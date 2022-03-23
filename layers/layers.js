var wms_layers = [];

var lyr_lycee_2019_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2019_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2019_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [542875.842008, 5450861.359828, 544019.089337, 5451746.606813]
                            })
                        });
var format_Parcours_1 = new ol.format.GeoJSON();
var features_Parcours_1 = format_Parcours_1.readFeatures(json_Parcours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcours_1.addFeatures(features_Parcours_1);
var lyr_Parcours_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcours_1, 
                style: style_Parcours_1,
                interactive: true,
                title: '<img src="styles/legend/Parcours_1.png" /> Parcours'
            });
var format_pointoiseaux_2 = new ol.format.GeoJSON();
var features_pointoiseaux_2 = format_pointoiseaux_2.readFeatures(json_pointoiseaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointoiseaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointoiseaux_2.addFeatures(features_pointoiseaux_2);
var lyr_pointoiseaux_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointoiseaux_2, 
                style: style_pointoiseaux_2,
                interactive: true,
                title: '<img src="styles/legend/pointoiseaux_2.png" /> point oiseaux'
            });

lyr_lycee_2019_georef_0.setVisible(true);lyr_Parcours_1.setVisible(true);lyr_pointoiseaux_2.setVisible(true);
var layersList = [lyr_lycee_2019_georef_0,lyr_Parcours_1,lyr_pointoiseaux_2];
lyr_Parcours_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', 'locus_acti': 'locus_acti', });
lyr_pointoiseaux_2.set('fieldAliases', {'Oiseaux': 'Oiseaux', 'nombre': 'nombre', 'type_conta': 'type_conta', });
lyr_Parcours_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'line': 'TextEdit', 'locus_acti': 'TextEdit', });
lyr_pointoiseaux_2.set('fieldImages', {'Oiseaux': 'TextEdit', 'nombre': 'TextEdit', 'type_conta': 'TextEdit', });
lyr_Parcours_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'line': 'no label', 'locus_acti': 'no label', });
lyr_pointoiseaux_2.set('fieldLabels', {'Oiseaux': 'inline label', 'nombre': 'inline label', 'type_conta': 'inline label', });
lyr_pointoiseaux_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});