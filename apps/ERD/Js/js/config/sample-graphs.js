/*! JointJS+ v3.6.3 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2022 client IO

 2023-03-13 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


var App = App || {};
App.config = App.config || {};

(function() {

    'use strict';

    App.config.sampleGraphs = {

        // credit goes to `http://www.continuitycentral.com/`
        erdSample: '{"cells":[{"type":"erd.Entity","position":{"x":435,"y":225.50000000000003},"size":{"width":160,"height":98.99999999999994},"angle":0,"id":"bbbd5104-4965-4b86-bcb1-1552bfbb04d6","z":88,"attrs":{"body":{"refPoints":"50,0 100,50 50,100 0,50","stroke":"#7c68fc","fill":"transparent","strokeDasharray":"0"},"label":{"fontSize":15,"fill":"#7c68fc","text":"Entity1test","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.WeakEntity","position":{"x":475,"y":82},"size":{"width":80,"height":80},"angle":0,"id":"6374dec5-83d1-4e31-832a-ac24755672a2","z":89,"attrs":{"body":{"stroke":"#fe854f","fill":"transparent","width":50,"height":30,"strokeDasharray":"10,5"},"label":{"fontSize":16,"fill":"#fe854f","text":"Entity2test","fontFamily":"Roboto Condensed","fontWeight":"Bold","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"6374dec5-83d1-4e31-832a-ac24755672a2"},"target":{"id":"bbbd5104-4965-4b86-bcb1-1552bfbb04d6"},"id":"56dc6e7b-916d-42fa-8d5b-0942474383e5","z":90,"labels":[],"attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":2}}},{"type":"standard.Rectangle","position":{"x":100,"y":110},"size":{"width":230,"height":50},"angle":0,"id":"f7d17de6-0af5-4b03-836b-0d465e9a2285","z":142,"attrs":{"body":{"stroke":"transparent","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":24,"fill":"#4b4a67","text":"Keep On Trucking ERD","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}}]}',
    };


})();
