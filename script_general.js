(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    return d(b);
    function d(k, l) {
        switch (k) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['startsWith']('photo'))
                        s = this['getByClassName']('PhotoPlayList');
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        } else
            e['call'](this);
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"data":{"locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"pitch":1},"history":{},"name":"Player504"},"id":"rootPlayer","class":"Player","children":["this.MainViewer"],"minHeight":0,"backgroundColor":["#FFFFFF"],"minWidth":0,"gap":10,"scripts":{"downloadFile":TDV.Tour.Script.downloadFile,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowScore":TDV.Tour.Script.quizShowScore,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"createTween":TDV.Tour.Script.createTween,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"cloneBindings":TDV.Tour.Script.cloneBindings,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizFinish":TDV.Tour.Script.quizFinish,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"playAudioList":TDV.Tour.Script.playAudioList,"init":TDV.Tour.Script.init,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"registerKey":TDV.Tour.Script.registerKey,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setLocale":TDV.Tour.Script.setLocale,"showPopupImage":TDV.Tour.Script.showPopupImage,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setValue":TDV.Tour.Script.setValue,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"translate":TDV.Tour.Script.translate,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"initQuiz":TDV.Tour.Script.initQuiz,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"executeJS":TDV.Tour.Script.executeJS,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaByName":TDV.Tour.Script.getMediaByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"clone":TDV.Tour.Script.clone,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showWindow":TDV.Tour.Script.showWindow,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getKey":TDV.Tour.Script.getKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"shareSocial":TDV.Tour.Script.shareSocial,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getComponentByName":TDV.Tour.Script.getComponentByName,"openLink":TDV.Tour.Script.openLink,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"historyGoBack":TDV.Tour.Script.historyGoBack,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"mixObject":TDV.Tour.Script.mixObject,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"existsKey":TDV.Tour.Script.existsKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getOverlays":TDV.Tour.Script.getOverlays,"getPixels":TDV.Tour.Script.getPixels,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"startMeasurement":TDV.Tour.Script.startMeasurement,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList},"start":"this.init()","hash": "ac8179c026f1c4d1ed4bc849c61a1aacb94fef4fd1557cab339de5c22d6d330c", "definitions": [{"initialSequence":"this.sequence_AF7D264F_BF4E_679D_41E5_F0A33F8D33B1","class":"PanoramaCamera","id":"panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A_camera","initialPosition":{"class":"PanoramaCameraPosition","hfov":122,"yaw":-89.03,"pitch":-1.94},"enterPointingToHorizon":true},{"class":"PlayList","id":"mainPlayList","items":["this.PanoramaPlayListItem_AD80E858_BF42_6B83_4191_3F2ABE1B98C0","this.PanoramaPlayListItem_AD811858_BF42_6B83_4190_3339388B702F","this.PanoramaPlayListItem_AD808858_BF42_6B83_41D1_7682DE81BD33","this.PanoramaPlayListItem_AD80C858_BF42_6B83_41C0_DA7E260D85D1"]},{"id":"panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992","label":trans('panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992.label'),"adjacentPanoramas":[{"panorama":"this.panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A","yaw":-13.15,"class":"AdjacentPanorama","distance":3.4,"data":{"overlayID":"overlay_AF0F7E3B_BF5E_E785_41CC_1520DDB63250"},"select":"this.overlay_AF0F7E3B_BF5E_E785_41CC_1520DDB63250.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":135,"data":{"label":"1"},"class":"Panorama","thumbnailUrl":"media/panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"width":12288,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"height":1024,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992_0/{face}/1/{row}_{column}.jpg","tags":"ondemand"},{"height":512,"colCount":6,"width":3072,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"]},{"height":1536,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992_0/{face}/vr/0.jpg","tags":"mobilevr"},{"height":2048,"colCount":6,"width":12288,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen"}]}}],"hfov":360,"overlays":["this.overlay_AF0F7E3B_BF5E_E785_41CC_1520DDB63250"],"vfov":180},{"id":"panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC","label":trans('panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC.label'),"adjacentPanoramas":[{"panorama":"this.panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A","yaw":137.59,"class":"AdjacentPanorama","distance":2.83,"data":{"overlayID":"overlay_AD1B2622_BF7D_A787_41C9_B29C77CCE1F9"},"select":"this.overlay_AD1B2622_BF7D_A787_41C9_B29C77CCE1F9.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":137,"data":{"label":"4"},"class":"Panorama","thumbnailUrl":"media/panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"width":12288,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"height":1024,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC_0/{face}/1/{row}_{column}.jpg","tags":"ondemand"},{"height":512,"colCount":6,"width":3072,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"]},{"height":1536,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC_0/{face}/vr/0.jpg","tags":"mobilevr"},{"height":2048,"colCount":6,"width":12288,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen"}]}}],"hfov":360,"overlays":["this.overlay_AD1B2622_BF7D_A787_41C9_B29C77CCE1F9"],"vfov":180},{"id":"panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A","label":trans('panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A.label'),"adjacentPanoramas":[{"panorama":"this.panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992","yaw":-122.93,"class":"AdjacentPanorama","distance":4.53,"data":{"overlayID":"overlay_AE24D6A2_BF42_6487_41E7_5506BE6CF54B"},"select":"this.overlay_AE24D6A2_BF42_6487_41E7_5506BE6CF54B.get('areas').forEach(function(a){ a.trigger('click') })"},{"panorama":"this.panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A","yaw":-1.35,"class":"AdjacentPanorama","distance":4.04,"data":{"overlayID":"overlay_AE29FC03_BF42_6B85_41D8_B8C495286DE0"},"select":"this.overlay_AE29FC03_BF42_6B85_41D8_B8C495286DE0.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":135,"data":{"label":"2"},"class":"Panorama","thumbnailUrl":"media/panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"width":12288,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"height":1024,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A_0/{face}/1/{row}_{column}.jpg","tags":"ondemand"},{"height":512,"colCount":6,"width":3072,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"]},{"height":1536,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A_0/{face}/vr/0.jpg","tags":"mobilevr"},{"height":2048,"colCount":6,"width":12288,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen"}]}}],"hfov":360,"overlays":["this.overlay_AE24D6A2_BF42_6487_41E7_5506BE6CF54B","this.overlay_AE29FC03_BF42_6B85_41D8_B8C495286DE0"],"vfov":180},{"initialSequence":"this.sequence_B476E45D_BF42_7BBD_41AA_ED0B0E031DCD","class":"PanoramaCamera","id":"panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC_camera","initialPosition":{"class":"PanoramaCameraPosition","hfov":127,"yaw":0,"pitch":0},"enterPointingToHorizon":true},{"id":"panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A","label":trans('panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A.label'),"adjacentPanoramas":[{"panorama":"this.panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC","yaw":-153.61,"class":"AdjacentPanorama","distance":10.78,"data":{"overlayID":"overlay_AD2557E3_BF43_E485_41D7_09E7E3EF2918"},"select":"this.overlay_AD2557E3_BF43_E485_41D7_09E7E3EF2918.get('areas').forEach(function(a){ a.trigger('click') })"},{"panorama":"this.panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A","yaw":114.82,"class":"AdjacentPanorama","distance":2.79,"data":{"overlayID":"overlay_AE944A9A_BF42_AC87_41E3_D915906A68A1"},"select":"this.overlay_AE944A9A_BF42_AC87_41E3_D915906A68A1.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":125,"data":{"label":"3"},"class":"Panorama","thumbnailUrl":"media/panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"width":12288,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"height":1024,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A_0/{face}/1/{row}_{column}.jpg","tags":"ondemand"},{"height":512,"colCount":6,"width":3072,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"]},{"height":1536,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A_0/{face}/vr/0.jpg","tags":"mobilevr"},{"height":2048,"colCount":6,"width":12288,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen"}]}}],"hfov":360,"overlays":["this.overlay_AD2557E3_BF43_E485_41D7_09E7E3EF2918","this.overlay_AE944A9A_BF42_AC87_41E3_D915906A68A1"],"vfov":180},{"initialSequence":"this.sequence_B471245D_BF42_7BBD_41D3_C1C26F95552A","class":"PanoramaCamera","id":"panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A_camera","initialPosition":{"class":"PanoramaCameraPosition","hfov":132,"yaw":1.09,"pitch":-4.68},"enterPointingToHorizon":true},{"playbackBarBottom":5,"subtitlesBackgroundOpacity":0.2,"toolTipFontSize":"1.11vmin","toolTipBackgroundColor":"#F6F6F6","toolTipPaddingRight":6,"playbackBarLeft":0,"progressBarBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"minHeight":50,"toolTipPaddingLeft":6,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","minWidth":100,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingBottom":4,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBackgroundColor":"#000000","playbackBarBackgroundOpacity":1,"playbackBarHeight":10,"data":{"name":"Main Viewer"},"progressBarBackgroundColorDirection":"horizontal","subtitlesGap":0,"playbackBarHeadWidth":6,"progressBottom":10,"propagateClick":false,"playbackBarHeadBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333138","playbackBarProgressBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarHeadShadow":true,"width":"100%","vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderRadius":0,"progressBarBorderColor":"#000000","progressRight":"33%","playbackBarBackgroundColorDirection":"vertical","progressBorderRadius":2,"progressOpacity":0.7,"height":"100%","progressHeight":2,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarHeadBorderColor":"#000000","progressBorderSize":0,"class":"ViewerArea","vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"playbackBarBorderSize":0,"subtitlesBottom":50,"toolTipBorderColor":"#767676","toolTipFontColor":"#606060","toolTipPaddingTop":4,"progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","progressBackgroundColor":["#000000"],"subtitlesTextShadowVerticalLength":1,"progressLeft":"33%","toolTipFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTop":0,"playbackBarHeadShadowOpacity":0.7,"firstTransitionDuration":0,"subtitlesTextShadowColor":"#000000","progressBarBorderSize":0,"progressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","id":"MainViewer"},{"arrowKeysAction":"translate","aaEnabled":true,"viewerArea":"this.MainViewer","mode":"quality","touchControlMode":"drag_rotation","class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation"},{"manualZoomSpeed":0,"initialSequence":"this.sequence_B472845B_BF42_7B84_41D4_F1A7A8AD33AA","manualRotationSpeed":76,"class":"PanoramaCamera","id":"panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992_camera","initialPosition":{"class":"PanoramaCameraPosition","hfov":132,"yaw":-0.17,"pitch":-3.23},"enterPointingToHorizon":true,"automaticZoomSpeed":0},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_AF7D264F_BF4E_679D_41E5_F0A33F8D33B1"},{"id":"PanoramaPlayListItem_AD80E858_BF42_6B83_4191_3F2ABE1B98C0","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992_camera","media":"this.panorama_B31108AA_BF42_AC84_41C2_6E6EA4A39992","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_AD811858_BF42_6B83_4190_3339388B702F","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A_camera","media":"this.panorama_B458342B_BF42_BB84_41D4_A1275C3EB65A","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"id":"PanoramaPlayListItem_AD808858_BF42_6B83_41D1_7682DE81BD33","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC_camera","media":"this.panorama_B4552965_BF42_6D8D_41DF_9F27BE97C3BC","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_AD80C858_BF42_6B83_41C0_DA7E260D85D1","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A_camera","media":"this.panorama_AF2D3A08_BF4E_6F83_41E4_8A49A7000E1A","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"},{"id":"overlay_AF0F7E3B_BF5E_E785_41CC_1520DDB63250","items":[{"roll":-5.52,"distance":50,"pitch":-26.55,"image":"this.AnimatedImageResource_ADBCA77B_BF42_6585_41E0_2B752ACFE61E","yaw":-13.15,"vfov":13.2,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":13.2,"data":{"label":"GoTo2"}}],"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_AF38DE47_BF5E_E78D_41E2_A4BB8FEEE17D"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"GoTo2","hasPanoramaAction":true}},{"id":"overlay_AD1B2622_BF7D_A787_41C9_B29C77CCE1F9","items":[{"distance":100,"pitch":-30.95,"image":"this.AnimatedImageResource_ADBC077E_BF42_647F_41D2_3929A554EB9A","yaw":137.59,"vfov":5.64,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":12.7,"data":{"label":"Arrow 03"}}],"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_AD1FA627_BF7D_A78D_41E3_799B46C42133"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"Arrow 03","hasPanoramaAction":true}},{"id":"overlay_AE24D6A2_BF42_6487_41E7_5506BE6CF54B","items":[{"roll":35.05,"distance":100,"pitch":-20.56,"image":"this.AnimatedImageResource_ADBC777D_BF42_647D_41D8_38CF38F2C16B","yaw":-122.93,"vfov":4.65,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":10.12,"data":{"label":"Arrow 03"}}],"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_AED2E6BB_BF42_6485_419D_24CADD6408A0"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"Arrow 03","hasPanoramaAction":true}},{"id":"overlay_AE29FC03_BF42_6B85_41D8_B8C495286DE0","items":[{"distance":100,"pitch":-22.81,"image":"this.AnimatedImageResource_ADBC477D_BF42_647D_41BB_B36554746728","yaw":-1.35,"vfov":5.87,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":13.2,"data":{"label":"Arrow 03"}}],"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_AE287C0C_BF42_6B83_41E5_C114C174BC23"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"Arrow 03","hasPanoramaAction":true}},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_B476E45D_BF42_7BBD_41AA_ED0B0E031DCD"},{"id":"overlay_AD2557E3_BF43_E485_41D7_09E7E3EF2918","items":[{"distance":50,"pitch":-8.95,"image":"this.AnimatedImageResource_AD83C77E_BF42_647F_41E4_6B71FE98FED7","yaw":-153.61,"vfov":12.2,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":12.2,"data":{"label":"Circle Arrow 02 Right-Up"}}],"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_ADDA47F0_BF43_E483_41D5_21CE18260734"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"Circle Arrow 02 Right-Up","hasPanoramaAction":true}},{"id":"overlay_AE944A9A_BF42_AC87_41E3_D915906A68A1","items":[{"roll":13.2,"distance":100,"pitch":-31.33,"image":"this.AnimatedImageResource_AD83877E_BF42_647F_41D5_C8E6BED940A3","yaw":114.82,"vfov":5.42,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":12.2,"data":{"label":"Arrow 03"}}],"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_AE810AB1_BF42_AC85_41E6_4A21719A321B"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"Arrow 03","hasPanoramaAction":true}},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_B471245D_BF42_7BBD_41D3_C1C26F95552A"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_B472845B_BF42_7B84_41D4_F1A7A8AD33AA"},{"colCount":4,"levels":[{"height":720,"width":1080,"class":"ImageResourceLevel","url":"media/res_AE8D4DB7_BF42_648D_41D1_70D93FB267C6_0.png"}],"rowCount":6,"finalFrame":"first","frameCount":24,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_ADBCA77B_BF42_6585_41E0_2B752ACFE61E"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_AF38DE47_BF5E_E78D_41E2_A4BB8FEEE17D","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AD811858_BF42_6B83_4190_3339388B702F, 1.0893371757925443, -4.689203925845143, 132 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"colCount":4,"levels":[{"height":720,"width":1080,"class":"ImageResourceLevel","url":"media/res_AE8D4DB7_BF42_648D_41D1_70D93FB267C6_0.png"}],"rowCount":6,"finalFrame":"first","frameCount":24,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_ADBC077E_BF42_647F_41D2_3929A554EB9A"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_AD1FA627_BF7D_A78D_41E3_799B46C42133","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AD80C858_BF42_6B83_41C0_DA7E260D85D1, -89.03818443804037, -1.9465648854961728, 122 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 3)"},{"colCount":4,"levels":[{"height":720,"width":1080,"class":"ImageResourceLevel","url":"media/res_AE8D4DB7_BF42_648D_41D1_70D93FB267C6_0.png"}],"rowCount":6,"finalFrame":"first","frameCount":24,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_ADBC777D_BF42_647D_41D8_38CF38F2C16B"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_AED2E6BB_BF42_6485_419D_24CADD6408A0","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AD80E858_BF42_6B83_4191_3F2ABE1B98C0, -0.17880089189446774, -3.244207797423892, 132 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"colCount":4,"levels":[{"height":720,"width":1080,"class":"ImageResourceLevel","url":"media/res_AE8D4DB7_BF42_648D_41D1_70D93FB267C6_0.png"}],"rowCount":6,"finalFrame":"first","frameCount":24,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_ADBC477D_BF42_647D_41BB_B36554746728"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_AE287C0C_BF42_6B83_41E5_C114C174BC23","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AD80C858_BF42_6B83_41C0_DA7E260D85D1, -89.03818443804037, -1.9465648854961728, 122 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 3)"},{"colCount":4,"levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_AE3599A7_BF42_AC8D_41D8_3A8CD8A2EEE1_0.png"}],"rowCount":6,"finalFrame":"first","frameCount":24,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_AD83C77E_BF42_647F_41E4_6B71FE98FED7"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_ADDA47F0_BF43_E483_41D5_21CE18260734","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AD808858_BF42_6B83_41D1_7682DE81BD33, 0, 0, 127 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2)"},{"colCount":4,"levels":[{"height":720,"width":1080,"class":"ImageResourceLevel","url":"media/res_AE8D4DB7_BF42_648D_41D1_70D93FB267C6_0.png"}],"rowCount":6,"finalFrame":"first","frameCount":24,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_AD83877E_BF42_647F_41D5_C8E6BED940A3"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_AE810AB1_BF42_AC85_41E6_4A21719A321B","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"}],"propagateClick":false,"scrollBarMargin":2,"watermark":false,"width":"100%","height":"100%","layout":"absolute","scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.18.js.map
})();
//Generated with v2022.2.18, Thu Jun 15 2023