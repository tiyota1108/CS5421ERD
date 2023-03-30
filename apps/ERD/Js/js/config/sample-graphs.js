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
        erdSample: '{"cells":[{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":160,"y":650},"angle":0,"id":"d8e6b2a5-1a33-41a1-aad8-3c6a9fd05fa9","z":148,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"customerid","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":265,"y":652.5},"angle":0,"id":"c2114e6a-b5af-4e76-9c5a-45c1216acd53","z":149,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"email","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":440,"y":650},"angle":0,"id":"be840a3d-333f-41d0-bc34-adc8894a9247","z":150,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"firstname","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Key","size":{"width":40,"height":40},"position":{"x":240,"y":560},"angle":0,"id":"48d9cd3c-0c7e-4905-9f8b-31b67db6ed16","z":154,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"integer"}},"position":{"distance":0.48268917800107725,"offset":0.5857013428228544,"angle":0}}],"source":{"id":"48d9cd3c-0c7e-4905-9f8b-31b67db6ed16"},"target":{"id":"d8e6b2a5-1a33-41a1-aad8-3c6a9fd05fa9"},"id":"f27998b7-bea1-46b0-858a-986795b2a4f4","z":161,"attrs":{}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":350,"y":450},"angle":0,"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8","z":162,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"customer","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"48d9cd3c-0c7e-4905-9f8b-31b67db6ed16"},"id":"91495806-4d3f-4a8b-aca2-a32a6b258ec8","z":163,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"c2114e6a-b5af-4e76-9c5a-45c1216acd53"},"id":"a4843066-501b-47f1-abe4-db83612b1bbb","z":164,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"be840a3d-333f-41d0-bc34-adc8894a9247"},"id":"67866bc4-111a-49d8-ae18-43eff03de205","z":165,"attrs":{}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":780,"y":450},"angle":0,"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56","z":166,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"game","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":713.5,"y":647.5},"angle":0,"id":"a188e49e-42f2-48f2-8823-ee676c484a28","z":167,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"game","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":955,"y":647.5},"angle":0,"id":"35758d6d-5160-4d78-a6da-b4f4f4c1fec8","z":168,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"price","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Key","size":{"width":40,"height":40},"position":{"x":740,"y":550},"angle":0,"id":"2bf0cf8d-fd71-4bc5-9572-0923aa3f5240","z":169,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"target":{"id":"2bf0cf8d-fd71-4bc5-9572-0923aa3f5240"},"id":"56a0938e-1f56-4d44-89a0-71d92a44c4d0","z":170,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"integer"}},"position":{"distance":0.6195863088762807,"offset":-1.9425507495207035,"angle":0}}],"source":{"id":"2bf0cf8d-fd71-4bc5-9572-0923aa3f5240"},"target":{"id":"a188e49e-42f2-48f2-8823-ee676c484a28"},"id":"fadb1d1f-812a-4537-9684-3a18e122a9b7","z":171,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"numeric(2,3)"}},"position":{"distance":0.5563308245886885,"offset":-6.3786569686329,"angle":0}}],"source":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"target":{"id":"35758d6d-5160-4d78-a6da-b4f4f4c1fec8"},"id":"8a38567f-1a5c-452f-904a-2e7c54b232ed","z":172,"attrs":{}},{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":610,"y":640},"angle":0,"id":"4730ebf4-197d-4760-85d1-6ee46590ab40","z":173,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"lastname","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"4730ebf4-197d-4760-85d1-6ee46590ab40"},"id":"9cd898d0-7f40-4ef4-acd4-6fc0b3a2e21e","z":174,"attrs":{}},{"type":"erd.Key","size":{"width":40,"height":40},"position":{"x":815,"y":550},"angle":0,"id":"ed04e8be-9d27-4006-a0c5-85be4ab9ea01","z":175,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"target":{"id":"ed04e8be-9d27-4006-a0c5-85be4ab9ea01"},"id":"dc2a60ec-9483-4716-88ec-d0d9fdda64fa","z":176,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":825,"y":647.5},"angle":0,"id":"d2b953cf-f12e-4f3f-8d89-5d1b2fab5f63","z":178,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"version","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(10)"}},"position":0.5}],"source":{"id":"ed04e8be-9d27-4006-a0c5-85be4ab9ea01"},"target":{"id":"d2b953cf-f12e-4f3f-8d89-5d1b2fab5f63"},"id":"48a95224-85f1-4bcd-af11-b93815a2f287","z":179,"attrs":{}},{"type":"erd.Relationship","size":{"width":60,"height":60},"position":{"x":590,"y":363.5},"angle":0,"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d","z":180,"attrs":{".outer":{"fill":"#61549c","stroke":"transparent","stroke-dasharray":"0"},"text":{"text":"download","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"orthogonal"},"connector":{"name":"normal"},"labels":[{"attrs":{"text":{"text":"(0, n)"}},"position":0.5}],"source":{"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d"},"target":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"id":"8eee9adc-9606-427d-ab55-9b775e390d13","z":181,"attrs":{}},{"type":"app.Link","router":{"name":"orthogonal"},"connector":{"name":"normal"},"labels":[{"attrs":{"text":{"text":"(0, n)"}},"position":0.5}],"source":{"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d"},"target":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"id":"cd33d58d-d058-47e0-b853-d8b84009d28d","z":182,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":597.5,"y":250},"angle":0,"id":"a6622c2c-8900-48a4-88d9-e33aa9aea637","z":183,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"download_time","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"timestamp"}},"position":0.5}],"source":{"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d"},"target":{"id":"a6622c2c-8900-48a4-88d9-e33aa9aea637"},"id":"8fa5dc14-d0b6-4554-a486-1b176fa45002","z":184,"attrs":{}}]}\n'
    };


})();
