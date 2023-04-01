const jsonObj = {"cells":[{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":20,"y":380},"angle":0,"id":"d8e6b2a5-1a33-41a1-aad8-3c6a9fd05fa9","z":148,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"customerid","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":160,"y":380},"angle":0,"id":"c2114e6a-b5af-4e76-9c5a-45c1216acd53","z":149,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"email","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":335,"y":380},"angle":0,"id":"be840a3d-333f-41d0-bc34-adc8894a9247","z":150,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"firstname","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Key","size":{"width":40,"height":40},"position":{"x":120,"y":280},"angle":0,"id":"48d9cd3c-0c7e-4905-9f8b-31b67db6ed16","z":154,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"bigserial"}},"position":{"distance":0.48268917800107725,"offset":0.5857013428228544,"angle":0}}],"source":{"id":"48d9cd3c-0c7e-4905-9f8b-31b67db6ed16"},"target":{"id":"d8e6b2a5-1a33-41a1-aad8-3c6a9fd05fa9"},"id":"f27998b7-bea1-46b0-858a-986795b2a4f4","z":161,"attrs":{}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":160,"y":213.5},"angle":0,"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8","z":162,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"customer","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"48d9cd3c-0c7e-4905-9f8b-31b67db6ed16"},"id":"91495806-4d3f-4a8b-aca2-a32a6b258ec8","z":163,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"c2114e6a-b5af-4e76-9c5a-45c1216acd53"},"id":"a4843066-501b-47f1-abe4-db83612b1bbb","z":164,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"be840a3d-333f-41d0-bc34-adc8894a9247"},"id":"67866bc4-111a-49d8-ae18-43eff03de205","z":165,"attrs":{}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":650,"y":213.5},"angle":0,"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56","z":166,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"game","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":567.5,"y":377.5},"angle":0,"id":"a188e49e-42f2-48f2-8823-ee676c484a28","z":167,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"game","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":815,"y":377.5},"angle":0,"id":"35758d6d-5160-4d78-a6da-b4f4f4c1fec8","z":168,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"price","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Key","size":{"width":40,"height":40},"position":{"x":620,"y":290},"angle":0,"id":"2bf0cf8d-fd71-4bc5-9572-0923aa3f5240","z":169,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"target":{"id":"2bf0cf8d-fd71-4bc5-9572-0923aa3f5240"},"id":"56a0938e-1f56-4d44-89a0-71d92a44c4d0","z":170,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"serial"}},"position":{"distance":0.6195863088762807,"offset":-1.9425507495207035,"angle":0}}],"source":{"id":"2bf0cf8d-fd71-4bc5-9572-0923aa3f5240"},"target":{"id":"a188e49e-42f2-48f2-8823-ee676c484a28"},"id":"fadb1d1f-812a-4537-9684-3a18e122a9b7","z":171,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"numeric(2,3)"}},"position":{"distance":0.5563308245886885,"offset":-6.3786569686329,"angle":0}}],"source":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"target":{"id":"35758d6d-5160-4d78-a6da-b4f4f4c1fec8"},"id":"8a38567f-1a5c-452f-904a-2e7c54b232ed","z":172,"attrs":{}},{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":490,"y":380},"angle":0,"id":"4730ebf4-197d-4760-85d1-6ee46590ab40","z":173,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"lastname","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"4730ebf4-197d-4760-85d1-6ee46590ab40"},"id":"9cd898d0-7f40-4ef4-acd4-6fc0b3a2e21e","z":174,"attrs":{}},{"type":"erd.Key","size":{"width":40,"height":40},"position":{"x":675,"y":290},"angle":0,"id":"ed04e8be-9d27-4006-a0c5-85be4ab9ea01","z":175,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"target":{"id":"ed04e8be-9d27-4006-a0c5-85be4ab9ea01"},"id":"dc2a60ec-9483-4716-88ec-d0d9fdda64fa","z":176,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":672.5,"y":377.5},"angle":0,"id":"d2b953cf-f12e-4f3f-8d89-5d1b2fab5f63","z":178,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"version","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(10)"}},"position":0.5}],"source":{"id":"ed04e8be-9d27-4006-a0c5-85be4ab9ea01"},"target":{"id":"d2b953cf-f12e-4f3f-8d89-5d1b2fab5f63"},"id":"48a95224-85f1-4bcd-af11-b93815a2f287","z":179,"attrs":{}},{"type":"erd.Relationship","size":{"width":60,"height":60},"position":{"x":430,"y":153.5},"angle":0,"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d","z":180,"attrs":{".outer":{"fill":"#61549c","stroke":"transparent","stroke-dasharray":"0"},"text":{"text":"download","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"orthogonal"},"connector":{"name":"normal"},"labels":[{"attrs":{"text":{"text":"(0, n)"}},"position":0.5}],"source":{"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d"},"target":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"id":"8eee9adc-9606-427d-ab55-9b775e390d13","z":181,"attrs":{}},{"type":"app.Link","router":{"name":"orthogonal"},"connector":{"name":"normal"},"labels":[{"attrs":{"text":{"text":"(0, n)"}},"position":0.5}],"source":{"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d"},"target":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"id":"cd33d58d-d058-47e0-b853-d8b84009d28d","z":182,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":435,"y":30},"angle":0,"id":"a6622c2c-8900-48a4-88d9-e33aa9aea637","z":183,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"download_time","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"timestamp"}},"position":0.5}],"source":{"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d"},"target":{"id":"a6622c2c-8900-48a4-88d9-e33aa9aea637"},"id":"8fa5dc14-d0b6-4554-a486-1b176fa45002","z":184,"attrs":{}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":160,"y":542},"angle":0,"id":"c4b32fdc-3b2e-44bd-b391-6c1a4fd7f796","z":185,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"university","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Relationship","size":{"width":60,"height":60},"position":{"x":400,"y":530},"angle":0,"id":"5ecc762a-43fb-40fb-8354-55930bcebbb5","z":186,"attrs":{".outer":{"fill":"#61549c","stroke":"transparent","stroke-dasharray":"0"},"text":{"text":"study","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":650,"y":542},"angle":0,"id":"79a8b55e-c283-4a35-8493-9ae5deb4b0aa","z":187,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"student","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Key","size":{"width":45,"height":45},"position":{"x":182.5,"y":608},"angle":0,"id":"910a59b6-85d4-4f28-b9ba-eccd976ecd0a","z":188,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"c4b32fdc-3b2e-44bd-b391-6c1a4fd7f796"},"target":{"id":"910a59b6-85d4-4f28-b9ba-eccd976ecd0a"},"id":"42f9eec6-6592-4c16-88c2-9af6a8d82a43","z":189,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":182.5,"y":707.5},"angle":0,"id":"1bca357b-20d3-44f6-ba7e-5ec733f52189","z":190,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"name","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(10)"}},"position":0.5}],"source":{"id":"910a59b6-85d4-4f28-b9ba-eccd976ecd0a"},"target":{"id":"1bca357b-20d3-44f6-ba7e-5ec733f52189"},"id":"4b25090c-327a-4fcc-a3c7-2366a7b3eb6f","z":191,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"5ecc762a-43fb-40fb-8354-55930bcebbb5"},"target":{"id":"c4b32fdc-3b2e-44bd-b391-6c1a4fd7f796"},"id":"54eac24a-8077-4692-a517-0a8995bdb55e","z":192,"attrs":{}},{"type":"erd.Key","size":{"width":45,"height":45},"position":{"x":605,"y":608},"angle":0,"id":"1688cc4b-002d-42ca-8761-0dcc39fd317a","z":193,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":510,"y":707.5},"angle":0,"id":"f0240494-9372-4afb-8ed6-d1d64b5d6a0c","z":194,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"studentid","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":672.5,"y":707.5},"angle":0,"id":"6c43e6ca-0fea-47f1-934b-47f93c4fdfe7","z":195,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"name","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":845,"y":707.5},"angle":0,"id":"d2382839-6dfb-45e0-8588-737644556544","z":196,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"address","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(10)"}},"position":0.5}],"source":{"id":"79a8b55e-c283-4a35-8493-9ae5deb4b0aa"},"target":{"id":"6c43e6ca-0fea-47f1-934b-47f93c4fdfe7"},"id":"db7f6d38-0d1d-4a80-9e00-99db13e7ce13","z":197,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"79a8b55e-c283-4a35-8493-9ae5deb4b0aa"},"target":{"id":"d2382839-6dfb-45e0-8588-737644556544"},"id":"0ef2c80d-4193-42b8-a0a8-e2af6cac7a00","z":198,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"79a8b55e-c283-4a35-8493-9ae5deb4b0aa"},"target":{"id":"1688cc4b-002d-42ca-8761-0dcc39fd317a"},"id":"f9e08aaf-ba01-4d59-8c2f-771f8404b1f2","z":199,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"serial"}},"position":0.5}],"source":{"id":"1688cc4b-002d-42ca-8761-0dcc39fd317a"},"target":{"id":"f0240494-9372-4afb-8ed6-d1d64b5d6a0c"},"id":"38b2faf9-8c72-4c38-b0c3-6a7bee85e8f8","z":200,"attrs":{}},{"type":"erd.Key","size":{"width":45,"height":45},"position":{"x":530,"y":537.5},"angle":0,"id":"dc1e3e9c-0732-4c68-91e2-325d1afd8123","z":201,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"5ecc762a-43fb-40fb-8354-55930bcebbb5"},"target":{"id":"dc1e3e9c-0732-4c68-91e2-325d1afd8123"},"id":"8d88b1ba-7b51-4e86-86af-dc09299a64fa","z":202,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"dc1e3e9c-0732-4c68-91e2-325d1afd8123"},"target":{"id":"79a8b55e-c283-4a35-8493-9ae5deb4b0aa"},"id":"76a8423e-5f12-4e0d-ae19-aca98e459f47","z":203,"attrs":{}},{"type":"erd.Relationship","size":{"width":60,"height":60},"position":{"x":430,"y":847.933837890625},"angle":0,"id":"8a358feb-d1d6-43a6-9c92-fdb3ab20ae28","z":204,"attrs":{".outer":{"fill":"#61549c","stroke":"transparent","stroke-dasharray":"0"},"text":{"text":"work_for","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":160,"y":859.933837890625},"angle":0,"id":"2b41eeea-0fbb-4e26-bdf4-9717e3e85af6","z":205,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"employee","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":650,"y":859.933837890625},"angle":0,"id":"97eeb186-5003-4987-a2a9-7a5308a5bbd8","z":206,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"company","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":332.5,"y":1006.4073486328125},"angle":0,"id":"dd5f20fa-5b22-4b2f-840f-68b5b2210481","z":207,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0","z":1},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"start","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"timestamp"}},"position":0.5}],"source":{"id":"8a358feb-d1d6-43a6-9c92-fdb3ab20ae28"},"target":{"id":"dd5f20fa-5b22-4b2f-840f-68b5b2210481"},"id":"5d16599e-57cf-47ac-a6cd-e01851f54540","z":208,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":540,"y":1006.4073486328125},"angle":0,"id":"f2a25e78-36e3-4164-9e04-6e94dcaa7d55","z":209,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0","z":1},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"end","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"timestamp"}},"position":0.5}],"source":{"id":"8a358feb-d1d6-43a6-9c92-fdb3ab20ae28"},"target":{"id":"f2a25e78-36e3-4164-9e04-6e94dcaa7d55"},"id":"dc4736cb-ca77-4034-8b08-5ca38bc419fd","z":210,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"(1,1)"}},"position":{"distance":0.47023809523809523,"offset":-2.07000000000005,"angle":0}}],"source":{"id":"8a358feb-d1d6-43a6-9c92-fdb3ab20ae28"},"target":{"id":"2b41eeea-0fbb-4e26-bdf4-9717e3e85af6"},"id":"1595fce3-b9c6-4aca-8717-6544ff93e259","z":211,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"8a358feb-d1d6-43a6-9c92-fdb3ab20ae28"},"target":{"id":"97eeb186-5003-4987-a2a9-7a5308a5bbd8"},"id":"5fb39826-0a70-45b8-931a-de41f78a02df","z":212,"attrs":{}},{"type":"erd.Key","size":{"width":45,"height":45},"position":{"x":155,"y":916.388427734375},"angle":0,"id":"f4ee0bcc-ddca-4c2a-afe6-5926894605fd","z":213,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"2b41eeea-0fbb-4e26-bdf4-9717e3e85af6"},"target":{"id":"f4ee0bcc-ddca-4c2a-afe6-5926894605fd"},"id":"61d996e6-18a6-4cfd-b100-3073f7cb7f70","z":214,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":115,"y":1006.4073486328125},"angle":0,"id":"49521d3b-dbb7-4a9c-ba2c-4410ae27b148","z":215,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0","z":1},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"number","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"serial"}},"position":0.5}],"source":{"id":"f4ee0bcc-ddca-4c2a-afe6-5926894605fd"},"target":{"id":"49521d3b-dbb7-4a9c-ba2c-4410ae27b148"},"id":"3d2b5e67-476b-4eed-9b45-4bba4b05fea7","z":216,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":250,"y":1006.4073486328125},"angle":0,"id":"81b39d26-a328-4468-9bac-c8c06ab14489","z":217,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0","z":1},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"name","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"2b41eeea-0fbb-4e26-bdf4-9717e3e85af6"},"target":{"id":"81b39d26-a328-4468-9bac-c8c06ab14489"},"id":"93e935b8-93c2-4978-a007-10c756cf5523","z":218,"attrs":{}},{"type":"erd.Key","size":{"width":45,"height":45},"position":{"x":650,"y":916.388427734375},"angle":0,"id":"3be33939-a051-452d-85ca-4ae385f0d568","z":219,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":612.5,"y":1006.4073486328125},"angle":0,"id":"346d439c-3746-4e94-8dee-79030c37fc43","z":220,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0","z":1},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"name","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"97eeb186-5003-4987-a2a9-7a5308a5bbd8"},"target":{"id":"3be33939-a051-452d-85ca-4ae385f0d568"},"id":"1ae020a4-3b11-4403-a6b1-df3a851f5872","z":221,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"3be33939-a051-452d-85ca-4ae385f0d568"},"target":{"id":"346d439c-3746-4e94-8dee-79030c37fc43"},"id":"b32683d0-7569-426f-8e35-bc4247ce9992","z":222,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":780,"y":1006.4073486328125},"angle":0,"id":"081b0039-efb6-402d-99fc-99574ede9a6c","z":223,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0","z":1},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"address","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"97eeb186-5003-4987-a2a9-7a5308a5bbd8"},"target":{"id":"081b0039-efb6-402d-99fc-99574ede9a6c"},"id":"6dac6b8b-e4af-462b-8887-0ee11ef6f6a0","z":224,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":407.5,"y":707.5},"angle":0,"id":"86e9a8aa-c20d-4794-ba79-ccb014612499","z":225,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0","z":1},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"duration","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"time"}},"position":0.5}],"source":{"id":"5ecc762a-43fb-40fb-8354-55930bcebbb5"},"target":{"id":"86e9a8aa-c20d-4794-ba79-ccb014612499"},"id":"7278c58e-9f47-47e5-a858-89c73205dba8","z":226,"attrs":{}}]}

// Reference: https://dev.mysql.com/doc/workbench/en/wb-migration-database-postgresql-typemapping.html
let typeConversion = new Map()
typeConversion.set("SMALLSERIAL", "SMALLINT")
typeConversion.set("BIGSERIAL", "BIGINT")
typeConversion.set("SERIAL", "INT")
typeConversion.set("BOOLEAN", "TINYINT(1)")
typeConversion.set("REAL", "FLOAT")
typeConversion.set("NUMERIC", "DECIMAL")
typeConversion.set("TIMESTAMP", "DATETIME")
typeConversion.set("TIME", "TIME")

function generatePostgreSqlDdl(jsonObj) {
    // Step 1: Validate graph properties
    if (jsonObj === undefined || jsonObj.cells === undefined) {
        throw new Error("[Graph validation error] The graph is empty or does not contain any cell")
    }

    for (let i = 0; i < jsonObj.cells.length; i++) {
        if (jsonObj.cells[i].type === undefined) {
            throw new Error("[Graph validation error] The graph contains visual objects with no type")
        }

        if (jsonObj.cells[i].type === 'app.Link') {
            if (jsonObj.cells[i].source === undefined || jsonObj.cells[i].source.id === undefined
                || jsonObj.cells[i].target === undefined || jsonObj.cells[i].target.id === undefined) {
                throw new Error("[Graph validation error] The graph contains link with no source or target")
            }
        } else if (jsonObj.cells[i].type === 'erd.Entity' || jsonObj.cells[i].type === 'erd.Relationship'
            || jsonObj.cells[i].type === 'erd.Key' || jsonObj.cells[i].type === 'erd.Attribute') {
            if (jsonObj.cells[i].id === undefined) {
                throw new Error("[Graph validation error] The graph contains shape without id")
            }
            if (jsonObj.cells[i].attrs === undefined ||
                jsonObj.cells[i].attrs.text === undefined || jsonObj.cells[i].attrs.text.text === undefined) {
                throw new Error("[Graph validation error] The graph contains shape with no value")
            }
        } else {
            throw new Error("[Graph validation error] The graph contains shape not recognized")
        }
    }

    // Step 2: Loop through shapes, and store the id -> text mapping
    const entities = new Map()
    const entityNamesSet = new Set()
    const relationships = new Map()
    const relationshipNamesSet = new Set()
    const keys = new Map()
    const attributes = new Map()
    const links = new Map()
    for (let i = 0; i < jsonObj.cells.length; i++) {
        switch (jsonObj.cells[i].type) {
            case 'erd.Entity':
                const entityName = jsonObj.cells[i].attrs.text.text
                if (entityNamesSet.has(entityName)) {
                    throw new Error("[Graph validation error] The graph contains entities with the same name: " + entityName)
                }
                entityNamesSet.add(entityName)
                entities.set(jsonObj.cells[i].id, entityName)
                break;
            case 'erd.Relationship':
                const relationshipName = jsonObj.cells[i].attrs.text.text
                if (entityNamesSet.has(relationshipName)) {
                    throw new Error("[Graph validation error] The graph contains relationships with the same name: " + relationshipName)
                }
                relationshipNamesSet.add(relationshipName)
                relationships.set(jsonObj.cells[i].id, relationshipName)
                break;
            case 'erd.Key':
                keys.set(jsonObj.cells[i].id, jsonObj.cells[i].attrs.text.text)
                break
            case 'erd.Attribute':
                attributes.set(jsonObj.cells[i].id, jsonObj.cells[i].attrs.text.text)
                break
            case 'app.Link':
                let labelWords = []
                if (jsonObj.cells[i].labels !== undefined) {
                    for (let j = 0; j < jsonObj.cells[i].labels.length; j++) {
                        const labelWord = jsonObj.cells[i].labels[j].attrs.text.text
                        if (labelWord.startsWith('(')) { // cardinality
                            if (!/^\([a-z0-9],[a-z0-9]\)$/.test(labelWord.replaceAll(' ', ''))) {
                                throw new Error("[Graph validation error] The graph contains unrecognized label: " + labelWord)
                            }
                        } else { // datatype
                            if (!typeConversion.has(labelWord.toUpperCase())
                                && !/^VARCHAR\([0-9]+\)$/.test(labelWord.toUpperCase())
                                && !/^NUMERIC\([0-9]+,[0-9]+\)$/.test(labelWord.toUpperCase())) {
                                throw new Error("[Graph validation error] The graph contains unrecognized label: " + labelWord)
                            }
                        }
                        labelWords.push(jsonObj.cells[i].labels[j].attrs.text.text)
                    }
                }
                links.set(jsonObj.cells[i].id, labelWords)
                break
            default:
                throw new Error("[Graph validation error] Got unexpected shape: " + jsonObj.cells[i].type)
        }
    }

    // Step 2: Loop through links
    const entityToAttribute = new Map() // structure: {"entity_id": set({id: "attribute_id", link: "link_id"})}
    const entityToKey = new Map() // structure: {"entity_id": set("key_id")}
    const keyToEntity = new Map() // structure: {"key_id": "entity_id"}}
    const keyToAttribute = new Map() // structure: {"key_id": {id: "attribute_id", link: "link_id"}}
    const relationshipToAttribute = new Map() // structure: {"relationship_id": set({id: "attribute_id", link: "link_id"})}
    const relationshipToEntity = new Map() // structure: {"relationship_id": set(id: "entity_id", link: "link_id")}
    const relationshipToKey = new Map() // structure: {"relationship_id": set("key_id")}
    const weakEntity = new Set()
    for (let i = 0; i < jsonObj.cells.length; i++) {
        if (jsonObj.cells[i].type === 'app.Link') {
            // Case 1: Entity to Attribute link (one-to-many, contain labels)
            if (entities.has(jsonObj.cells[i].source.id) && attributes.has(jsonObj.cells[i].target.id)) {
                let newEntry = {id: jsonObj.cells[i].target.id, link: jsonObj.cells[i].id}
                entityToAttribute.set(jsonObj.cells[i].source.id,
                    entityToAttribute.has(jsonObj.cells[i].source.id) ?
                        entityToAttribute.get(jsonObj.cells[i].source.id).add(newEntry) :
                        new Set([newEntry]))
            } else if (entities.has(jsonObj.cells[i].target.id) && attributes.has(jsonObj.cells[i].source.id)) {
                let newEntry = {id: jsonObj.cells[i].source.id, link: jsonObj.cells[i].id}
                entityToAttribute.set(jsonObj.cells[i].target.id,
                    entityToAttribute.has(jsonObj.cells[i].target.id) ?
                        entityToAttribute.get(jsonObj.cells[i].target.id).add(newEntry) :
                        new Set([newEntry]))
            }

            // Case 2: Entity to Key link (one-to-many, no label)
            if (entities.has(jsonObj.cells[i].source.id) && keys.has(jsonObj.cells[i].target.id)) {
                entityToKey.set(jsonObj.cells[i].source.id,
                    entityToKey.has(jsonObj.cells[i].source.id) ?
                        entityToKey.get(jsonObj.cells[i].source.id).add(jsonObj.cells[i].target.id) :
                        new Set([jsonObj.cells[i].target.id]))
            }

            // Case 3: Key to Entity link [weak entity] (one-to-one, no label)
            if (entities.has(jsonObj.cells[i].target.id) && keys.has(jsonObj.cells[i].source.id)) {
                if (keyToEntity.has(jsonObj.cells[i].source.id)) {
                    throw new Error("[Graph validation error] Got key connected to multiple entities")
                }
                keyToEntity.set(jsonObj.cells[i].source.id, jsonObj.cells[i].target.id)
                weakEntity.add(jsonObj.cells[i].target.id)
            }

            // Case 4: Key to Attribute link (one-to-one, contains labels)
            if (keys.has(jsonObj.cells[i].source.id) && attributes.has(jsonObj.cells[i].target.id)) {
                if (keyToAttribute.has(jsonObj.cells[i].source.id)) {
                    throw new Error("[Graph validation error] Got key connected to multiple attributes")
                }
                let newEntry = {id: jsonObj.cells[i].target.id, link: jsonObj.cells[i].id}
                keyToAttribute.set(jsonObj.cells[i].source.id, newEntry)
            } else if (keys.has(jsonObj.cells[i].target.id) && attributes.has(jsonObj.cells[i].source.id)) {
                if (keyToAttribute.has(jsonObj.cells[i].target.id)) {
                    throw new Error("[Graph validation error] Got key connected to multiple attributes")
                }
                let newEntry = {id: jsonObj.cells[i].source.id, link: jsonObj.cells[i].id}
                keyToAttribute.set(jsonObj.cells[i].source.id, newEntry)
            }

            // Case 5: Relationship to Attribute link (one-to-many, contains labels)
            if (relationships.has(jsonObj.cells[i].source.id) && attributes.has(jsonObj.cells[i].target.id)) {
                let newEntry = {id: jsonObj.cells[i].target.id, link: jsonObj.cells[i].id}
                relationshipToAttribute.set(jsonObj.cells[i].source.id,
                    relationshipToAttribute.has(jsonObj.cells[i].source.id) ?
                        relationshipToAttribute.get(jsonObj.cells[i].source.id).add(newEntry) :
                        new Set([newEntry]))
            } else if (relationships.has(jsonObj.cells[i].target.id) && attributes.has(jsonObj.cells[i].source.id)) {
                let newEntry = {id: jsonObj.cells[i].source.id, link: jsonObj.cells[i].id}
                relationshipToAttribute.set(jsonObj.cells[i].target.id,
                    relationshipToAttribute.has(jsonObj.cells[i].target.id) ?
                        relationshipToAttribute.get(jsonObj.cells[i].target.id).add(newEntry) :
                        new Set([newEntry]))
            }

            // Case 6: Relationship to Entity link (one-to-many, contains labels for cardinality)
            if (relationships.has(jsonObj.cells[i].source.id) && entities.has(jsonObj.cells[i].target.id)) {
                let newEntry = {id: jsonObj.cells[i].target.id, link: jsonObj.cells[i].id}
                relationshipToEntity.set(jsonObj.cells[i].source.id,
                    relationshipToEntity.has(jsonObj.cells[i].source.id) ?
                        relationshipToEntity.get(jsonObj.cells[i].source.id).add(newEntry) :
                        new Set([newEntry]))
            } else if (relationships.has(jsonObj.cells[i].target.id) && entities.has(jsonObj.cells[i].source.id)) {
                let newEntry = {id: jsonObj.cells[i].source.id, link: jsonObj.cells[i].id}
                relationshipToEntity.set(jsonObj.cells[i].target.id,
                    relationshipToEntity.has(jsonObj.cells[i].target.id) ?
                        relationshipToEntity.get(jsonObj.cells[i].target.id).add(newEntry) :
                        new Set([newEntry]))
            }

            // Case 7: Relationship to Key link (one-to-many, no label)
            if (relationships.has(jsonObj.cells[i].source.id) && keys.has(jsonObj.cells[i].target.id)) {
                relationshipToKey.set(jsonObj.cells[i].source.id,
                    relationshipToKey.has(jsonObj.cells[i].source.id) ?
                        relationshipToKey.get(jsonObj.cells[i].source.id).add(jsonObj.cells[i].target.id) :
                        new Set([jsonObj.cells[i].target.id]))
            } else if (relationships.has(jsonObj.cells[i].target.id) && keys.has(jsonObj.cells[i].source.id)) {
                relationshipToKey.set(jsonObj.cells[i].target.id,
                    relationshipToKey.has(jsonObj.cells[i].target.id) ?
                        relationshipToKey.get(jsonObj.cells[i].target.id).add(jsonObj.cells[i].source.id) :
                        new Set([jsonObj.cells[i].source.id]))
            }
        }
    }

    // Step 4: Fill in ddl for entity
    let entitySql = new Map()
    let entityPrimaryKeysInfo = new Map() // structure: {"entity_id": set({name: "key_name", type: "key_type"})}
    let entityAttributesInfo = new Map() // structure: {"entity_id": set({name: "attribute_name", type: "attribute_type"})}
    let entitiesQueue = Array.from(entities.keys())
    while (entitiesQueue.length !== 0) {
        const entityId = entitiesQueue[0]
        const values = entityToKey.get(entitiesQueue[0])
        entitiesQueue.shift()
        let currPrimaryKeysInfo = []
        let currAttributesInfo = []
        let currForeignKeysInfo = []

        // Step 4.1: Process weak entity & foreign keys
        if (weakEntity.has(entityId)) {
            // Find entities that it depends on
            let dependentEntities = []
            for (let [keyId, keyToEntityId] of keyToEntity) {
                if (keyToEntityId === entityId) {
                    for (let [relationshipId, keyIds] of relationshipToKey) {
                        if (keyIds.has(keyId)) {
                            dependentEntities = Array.from(relationshipToEntity.get(relationshipId))
                        }
                    }
                }
            }

            // Check if dependentEntities are processed
            let dependencyReady = true
            for (let i = 0; i < dependentEntities.length; i++) {
                if (!entityPrimaryKeysInfo.has(dependentEntities[i].id)) {
                    dependencyReady = false
                    break
                }
            }
            if (!dependencyReady) {
                entitiesQueue.push(entityId)
                continue
            }

            // If ready
            for (let i = 0; i < dependentEntities.length; i++) {
                let dependentEntityId = dependentEntities[i].id
                let dependentEntityName = entities.get(dependentEntityId)
                let keysWithType = entityPrimaryKeysInfo.get(dependentEntityId)
                for (let j = 0; j < keysWithType.length; j++) {
                    let keyName = dependentEntityName + "_" + keysWithType[j].name
                    let keyType = keysWithType[j].type
                    currPrimaryKeysInfo.push({name: keyName, type: keyType})
                    currForeignKeysInfo.push({dependentEntity: dependentEntityName, dependentAttribute: keysWithType[j].name,
                        name: keyName, type: keyType})
                }
            }
        }

        // Step 4.2: Process keys
        const currEntityKeys = Array.from(values)
        for (let i = 0; i < currEntityKeys.length; i++) {
            if (!keyToAttribute.has(currEntityKeys[i])) {
                throw new Error("[Graph validation error] Got key unconnected to attribute")
            }
            let linkId = keyToAttribute.get(currEntityKeys[i]).link
            if (!links.has(linkId) || links.get(linkId).length === 0) {
                throw new Error("[Graph validation error] Got key to attribute connection without data type specified")
            }
            let attributeName = attributes.get(keyToAttribute.get(currEntityKeys[i]).id)
            let linkWords = links.get(linkId).join(" ")
            currPrimaryKeysInfo.push({name: attributeName, type: linkWords})
        }

        // Step 4.3: Process attributes
        if (entityToAttribute.get(entityId) !== undefined) {
            const currEntityAttributes = Array.from(entityToAttribute.get(entityId))
            for (let i = 0; i < currEntityAttributes.length; i++) {
                if (!links.has(currEntityAttributes[i].link) || links.get(currEntityAttributes[i].link).length === 0) {
                    throw new Error("[Graph validation error] Got entity to attribute connection without data type specified")
                }
                let attributeName = attributes.get(currEntityAttributes[i].id)
                let linkWords = links.get(currEntityAttributes[i].link).join(" ")
                currAttributesInfo.push({name: attributeName, type: linkWords})
            }
        }

        // Step 4.5: Generate SQL
        if (currPrimaryKeysInfo.length === 0) {
            throw new Error("[Graph validation error] No primary key for entity: " + entities.get(entityId))
        }
        let ddlForCurrEntity = ("CREATE TABLE " + entities.get(entityId) + " (\n")
        for (let i = 0; i < currPrimaryKeysInfo.length; i++) {
            ddlForCurrEntity += ("\t" + currPrimaryKeysInfo[i].name + " " + currPrimaryKeysInfo[i].type + ", \n")
        }
        for (let i = 0; i < currAttributesInfo.length; i++) {
            ddlForCurrEntity += ("\t" + currAttributesInfo[i].name + " " + currAttributesInfo[i].type + ", \n")
        }
        for (let i = 0; i < currForeignKeysInfo.length; i++) {
            ddlForCurrEntity += ("\t" + currForeignKeysInfo[i].name + " " + currForeignKeysInfo[i].type + ", \n")
        }
        ddlForCurrEntity += ("\tPRIMARY KEY (" + currPrimaryKeysInfo.map(e => e.name).join(",") + ")")
        if (currForeignKeysInfo.length > 0) {
            ddlForCurrEntity += ",\n"
            for (let i = 0; i < currForeignKeysInfo.length; i++) {
                ddlForCurrEntity += ("\tCONSTRAINT fk_" + i + "_" + entities.get(entityId)
                    + " FOREIGN KEY(" + currForeignKeysInfo[i].name + ")"
                    + " REFERENCES " + currForeignKeysInfo[i].dependentEntity + "(" + currForeignKeysInfo[i].dependentAttribute + "), \n")
            }
            ddlForCurrEntity = ddlForCurrEntity.trim()
            ddlForCurrEntity = ddlForCurrEntity.substring(0, ddlForCurrEntity.length-1)
        }
        ddlForCurrEntity += "\n)\n"

        // Step 4.6: Store for future usage
        entitySql.set(entityId, ddlForCurrEntity)
        entityPrimaryKeysInfo.set(entityId, currPrimaryKeysInfo)
        entityAttributesInfo.set(entityId, currAttributesInfo)
    }

    // Step 5: Fill in ddl for relationship
    let relationshipSql = new Map()
    for (let [key, values] of relationshipToEntity) {
        let currPrimaryKeysInfo = new Set()
        let currForeignKeysInfo = new Set()
        let currAttributesInfo = []
        let optimizableEntityIds = new Set()
        let hasOwnPrimaryKey = false

        // Step 5.1: Process relationship -> key
        if (relationshipToKey.get(key) !== undefined) {
            const currRelationshipKeys = Array.from(relationshipToKey.get(key))
            for (let i = 0; i < currRelationshipKeys.length; i++) {
                if (!keyToAttribute.has(currRelationshipKeys[i]) && !keyToEntity.has(currRelationshipKeys[i])) {
                    throw new Error("[Graph validation error] Got relationship -> key connection unconnected with either attribute or entity")
                }
                if (keyToAttribute.has(currRelationshipKeys[i])) {
                    // relationship -> key -> attribute
                    hasOwnPrimaryKey = true
                    let linkId = keyToAttribute.get(currRelationshipKeys[i]).link
                    if (!links.has(linkId) || links.get(linkId).length === 0) {
                        throw new Error("[Graph validation error] Got key to attribute connection without data type specified")
                    }
                    let attributeName = attributes.get(keyToAttribute.get(currRelationshipKeys[i]).id)
                    let linkWords = links.get(linkId).join(" ")
                    currPrimaryKeysInfo.push({name: attributeName, type: linkWords})
                }
            }
            for (let i = 0; i < currRelationshipKeys.length; i++) {
                if (keyToEntity.has(currRelationshipKeys[i])) {
                    // relationship -> key -> entity
                    let entityId = keyToEntity.get(currRelationshipKeys[i])
                    let entityName = entities.get(entityId)
                    entityPrimaryKeysInfo.get(entityId).forEach(e => {
                        if (!hasOwnPrimaryKey) {
                            currPrimaryKeysInfo.add({name: e.name, type: e.type})
                        }
                        currForeignKeysInfo.add({dependentEntity: entityName, dependentAttribute: e.name, name: e.name, type: e.type})
                    })
                    optimizableEntityIds.add(keyToEntity.get(currRelationshipKeys[i]))
                }
            }
        }

        // Step 5.2: Process relationship -> entity
        const currRelationshipImplicitKeys = Array.from(values)
        for (let i = 0; i < currRelationshipImplicitKeys.length; i++) {
            let entityId = currRelationshipImplicitKeys[i].id
            let linkId = currRelationshipImplicitKeys[i].link
            if (links.has(linkId) && links.get(linkId).length === 1 && links.get(linkId)[0].replaceAll(' ', '') === '(1,1)') {
                optimizableEntityIds.add(entityId)
            }
            let entityName = entities.get(entityId)
            let entityInfo = entityPrimaryKeysInfo.get(entityId)
            for (let j = 0; j < entityInfo.length; j++) {
                let keyName = entityName + "_" + entityInfo[j].name
                let keyType = entityInfo[j].type
                if (!hasOwnPrimaryKey) {
                    currPrimaryKeysInfo.add({name: keyName, type: keyType})
                }
                currForeignKeysInfo.add({dependentEntity: entityName, dependentAttribute: entityInfo[j].name,
                    name: keyName, type: keyType})
            }
        }

        // Step 5.3: Process relationship -> attribute
        if (relationshipToAttribute.get(key) !== undefined) {
            const currRelationshipAttributes = Array.from(relationshipToAttribute.get(key))
            for (let i = 0; i < currRelationshipAttributes.length; i++) {
                if (!links.has(currRelationshipAttributes[i].link) || links.get(currRelationshipAttributes[i].link) === 0) {
                    throw new Error("[Graph validation error] Got relationship to attribute connection without data type specified")
                }
                let attributeName = attributes.get(currRelationshipAttributes[i].id)
                let linkWords = links.get(currRelationshipAttributes[i].link).join(" ")
                currAttributesInfo.push({name: attributeName, type: linkWords})
            }
        }

        // Step 5.4: Optimization: Relationship of cardinality 1-1 or weak entity can be merged together
        if (optimizableEntityIds.size !== 0 && values.size - optimizableEntityIds.size <= 1) {
            let ddlForCurrRelationship = ""
            optimizableEntityIds = Array.from(optimizableEntityIds)
            for (let i = 0; i < optimizableEntityIds.length; i++) {
                let entityId = optimizableEntityIds[i]
                let mergedEntitySql = entitySql.get(entityId)
                entitySql.delete(entityId)
                mergedEntitySql = mergedEntitySql.replace(/^CREATE TABLE [a-zA-Z0-9_]+/,
                    "CREATE TABLE " + entities.get(entityId) + "_" + relationships.get(key))

                if (relationshipToAttribute.get(key) !== undefined) {
                    mergedEntitySql = mergedEntitySql.trim()
                    mergedEntitySql = mergedEntitySql.substring(0, mergedEntitySql.length-1) // remove last bracket
                    mergedEntitySql = mergedEntitySql.trim()
                    mergedEntitySql += ", \n"
                    mergedEntitySql += currAttributesInfo.map(e => "\t" + e.name + " " + e.type).join(", \n")
                    mergedEntitySql = mergedEntitySql.substring(0, mergedEntitySql.length-1) // remove last comma
                    mergedEntitySql += "\n)\n"
                }
                ddlForCurrRelationship += mergedEntitySql
            }
            relationshipSql.set(key, ddlForCurrRelationship)
            continue
        }

        // Step 5.5: Generate sql
        currPrimaryKeysInfo = Array.from(currPrimaryKeysInfo)
        currForeignKeysInfo = Array.from(currForeignKeysInfo)
        if (currPrimaryKeysInfo.length === 0) {
            throw new Error("[Graph validation error] No primary key for relationship: " + relationships.get(key))
        }
        let ddlForCurrRelationship = ("CREATE TABLE " + relationships.get(key) + " (\n")
        for (let i = 0; i < currPrimaryKeysInfo.length; i++) {
            ddlForCurrRelationship += ("\t" + currPrimaryKeysInfo[i].name + " " + currPrimaryKeysInfo[i].type + ", \n")
        }
        for (let i = 0; i < currAttributesInfo.length; i++) {
            ddlForCurrRelationship += ("\t" + currAttributesInfo[i].name + " " + currAttributesInfo[i].type + ", \n")
        }
        ddlForCurrRelationship += ("\tPRIMARY KEY (" + currPrimaryKeysInfo.map(e => e.name).join(",") + ")")
        if (currForeignKeysInfo.length > 0) {
            ddlForCurrRelationship += ",\n"
            for (let i = 0; i < currForeignKeysInfo.length; i++) {
                ddlForCurrRelationship += ("\tCONSTRAINT fk_" + i + "_" + relationships.get(key)
                    + " FOREIGN KEY(" + currForeignKeysInfo[i].name + ")"
                    + " REFERENCES " + currForeignKeysInfo[i].dependentEntity + "(" + currForeignKeysInfo[i].dependentAttribute + "), \n")
            }
            ddlForCurrRelationship = ddlForCurrRelationship.trim()
            ddlForCurrRelationship = ddlForCurrRelationship.substring(0, ddlForCurrRelationship.length-1)
        }
        ddlForCurrRelationship += "\n)\n"

        // Step 5.6: Store for future usage
        relationshipSql.set(key, ddlForCurrRelationship)
    }

    // Step 6: Join necessary sql together
    let res = ""
    for (let [_, sql] of entitySql) {
        res += sql
    }
    for (let [_, sql] of relationshipSql) {
        res += sql
    }
    return res
}

function generateSqlDdl(jsonObj, syntax) {
    let result = generatePostgreSqlDdl(jsonObj)

    if (syntax === 'mysql') {
        for (let [key, value] of typeConversion) {
            let keyRegex = new RegExp(key, "ig");
            result = result.replaceAll(keyRegex, value)
        }
    } else if (syntax !== '' && syntax !== undefined) {
        throw new Error("[Syntax conversion error] The SQL DDL generator currently is not supported for " + syntax)
    }

    return result
}

console.log(generateSqlDdl(jsonObj, 'mysql'))
