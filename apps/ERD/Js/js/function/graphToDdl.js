const jsonObj = {"cells":[{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":160,"y":650},"angle":0,"id":"d8e6b2a5-1a33-41a1-aad8-3c6a9fd05fa9","z":148,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"customerid","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":265,"y":652.5},"angle":0,"id":"c2114e6a-b5af-4e76-9c5a-45c1216acd53","z":149,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"email","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":440,"y":650},"angle":0,"id":"be840a3d-333f-41d0-bc34-adc8894a9247","z":150,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"firstname","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Key","size":{"width":40,"height":40},"position":{"x":240,"y":560},"angle":0,"id":"48d9cd3c-0c7e-4905-9f8b-31b67db6ed16","z":154,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"bigserial"}},"position":{"distance":0.48268917800107725,"offset":0.5857013428228544,"angle":0}}],"source":{"id":"48d9cd3c-0c7e-4905-9f8b-31b67db6ed16"},"target":{"id":"d8e6b2a5-1a33-41a1-aad8-3c6a9fd05fa9"},"id":"f27998b7-bea1-46b0-858a-986795b2a4f4","z":161,"attrs":{}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":350,"y":450},"angle":0,"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8","z":162,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"customer","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"48d9cd3c-0c7e-4905-9f8b-31b67db6ed16"},"id":"91495806-4d3f-4a8b-aca2-a32a6b258ec8","z":163,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"c2114e6a-b5af-4e76-9c5a-45c1216acd53"},"id":"a4843066-501b-47f1-abe4-db83612b1bbb","z":164,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"be840a3d-333f-41d0-bc34-adc8894a9247"},"id":"67866bc4-111a-49d8-ae18-43eff03de205","z":165,"attrs":{}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":780,"y":450},"angle":0,"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56","z":166,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"game","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":713.5,"y":647.5},"angle":0,"id":"a188e49e-42f2-48f2-8823-ee676c484a28","z":167,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"game","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":955,"y":647.5},"angle":0,"id":"35758d6d-5160-4d78-a6da-b4f4f4c1fec8","z":168,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"price","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Key","size":{"width":40,"height":40},"position":{"x":740,"y":550},"angle":0,"id":"2bf0cf8d-fd71-4bc5-9572-0923aa3f5240","z":169,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"target":{"id":"2bf0cf8d-fd71-4bc5-9572-0923aa3f5240"},"id":"56a0938e-1f56-4d44-89a0-71d92a44c4d0","z":170,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"serial"}},"position":{"distance":0.6195863088762807,"offset":-1.9425507495207035,"angle":0}}],"source":{"id":"2bf0cf8d-fd71-4bc5-9572-0923aa3f5240"},"target":{"id":"a188e49e-42f2-48f2-8823-ee676c484a28"},"id":"fadb1d1f-812a-4537-9684-3a18e122a9b7","z":171,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"numeric(2,3)"}},"position":{"distance":0.5563308245886885,"offset":-6.3786569686329,"angle":0}}],"source":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"target":{"id":"35758d6d-5160-4d78-a6da-b4f4f4c1fec8"},"id":"8a38567f-1a5c-452f-904a-2e7c54b232ed","z":172,"attrs":{}},{"type":"erd.Attribute","size":{"width":40,"height":40},"position":{"x":610,"y":640},"angle":0,"id":"4730ebf4-197d-4760-85d1-6ee46590ab40","z":173,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"lastname","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"target":{"id":"4730ebf4-197d-4760-85d1-6ee46590ab40"},"id":"9cd898d0-7f40-4ef4-acd4-6fc0b3a2e21e","z":174,"attrs":{}},{"type":"erd.Key","size":{"width":40,"height":40},"position":{"x":815,"y":550},"angle":0,"id":"ed04e8be-9d27-4006-a0c5-85be4ab9ea01","z":175,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"target":{"id":"ed04e8be-9d27-4006-a0c5-85be4ab9ea01"},"id":"dc2a60ec-9483-4716-88ec-d0d9fdda64fa","z":176,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":825,"y":647.5},"angle":0,"id":"d2b953cf-f12e-4f3f-8d89-5d1b2fab5f63","z":178,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"version","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(10)"}},"position":0.5}],"source":{"id":"ed04e8be-9d27-4006-a0c5-85be4ab9ea01"},"target":{"id":"d2b953cf-f12e-4f3f-8d89-5d1b2fab5f63"},"id":"48a95224-85f1-4bcd-af11-b93815a2f287","z":179,"attrs":{}},{"type":"erd.Relationship","size":{"width":60,"height":60},"position":{"x":590,"y":363.5},"angle":0,"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d","z":180,"attrs":{".outer":{"fill":"#61549c","stroke":"transparent","stroke-dasharray":"0"},"text":{"text":"download","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"orthogonal"},"connector":{"name":"normal"},"labels":[{"attrs":{"text":{"text":"(0, n)"}},"position":0.5}],"source":{"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d"},"target":{"id":"97e623a3-36a7-4d93-8116-34c5fa1f9d56"},"id":"8eee9adc-9606-427d-ab55-9b775e390d13","z":181,"attrs":{}},{"type":"app.Link","router":{"name":"orthogonal"},"connector":{"name":"normal"},"labels":[{"attrs":{"text":{"text":"(0, n)"}},"position":0.5}],"source":{"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d"},"target":{"id":"160f0c9c-1609-4909-a1a5-9c32fc521db8"},"id":"cd33d58d-d058-47e0-b853-d8b84009d28d","z":182,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":597.5,"y":250},"angle":0,"id":"a6622c2c-8900-48a4-88d9-e33aa9aea637","z":183,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"download_time","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"timestamp"}},"position":0.5}],"source":{"id":"11bcd409-5106-4f24-81a9-0d35d2aaf19d"},"target":{"id":"a6622c2c-8900-48a4-88d9-e33aa9aea637"},"id":"8fa5dc14-d0b6-4554-a486-1b176fa45002","z":184,"attrs":{}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":160,"y":762},"angle":0,"id":"c4b32fdc-3b2e-44bd-b391-6c1a4fd7f796","z":185,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"university","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Relationship","size":{"width":60,"height":60},"position":{"x":335,"y":750},"angle":0,"id":"5ecc762a-43fb-40fb-8354-55930bcebbb5","z":186,"attrs":{".outer":{"fill":"#61549c","stroke":"transparent","stroke-dasharray":"0"},"text":{"text":"study","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Entity","size":{"width":90,"height":36},"position":{"x":500,"y":762},"angle":0,"id":"79a8b55e-c283-4a35-8493-9ae5deb4b0aa","z":187,"attrs":{".outer":{"fill":"#31d0c6","stroke":"transparent","rx":3,"ry":3,"stroke-dasharray":"0"},"text":{"text":"student","font-family":"Roboto Condensed","font-size":11,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Key","size":{"width":45,"height":45},"position":{"x":182.5,"y":828},"angle":0,"id":"910a59b6-85d4-4f28-b9ba-eccd976ecd0a","z":188,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"c4b32fdc-3b2e-44bd-b391-6c1a4fd7f796"},"target":{"id":"910a59b6-85d4-4f28-b9ba-eccd976ecd0a"},"id":"42f9eec6-6592-4c16-88c2-9af6a8d82a43","z":189,"attrs":{}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":182.5,"y":932},"angle":0,"id":"1bca357b-20d3-44f6-ba7e-5ec733f52189","z":190,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"name","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(10)"}},"position":0.5}],"source":{"id":"910a59b6-85d4-4f28-b9ba-eccd976ecd0a"},"target":{"id":"1bca357b-20d3-44f6-ba7e-5ec733f52189"},"id":"4b25090c-327a-4fcc-a3c7-2366a7b3eb6f","z":191,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"5ecc762a-43fb-40fb-8354-55930bcebbb5"},"target":{"id":"c4b32fdc-3b2e-44bd-b391-6c1a4fd7f796"},"id":"54eac24a-8077-4692-a517-0a8995bdb55e","z":192,"attrs":{}},{"type":"erd.Key","size":{"width":45,"height":45},"position":{"x":455,"y":828},"angle":0,"id":"1688cc4b-002d-42ca-8761-0dcc39fd317a","z":193,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":372.5,"y":932},"angle":0,"id":"f0240494-9372-4afb-8ed6-d1d64b5d6a0c","z":194,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"studentid","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":522.5,"y":932},"angle":0,"id":"6c43e6ca-0fea-47f1-934b-47f93c4fdfe7","z":195,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"name","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"erd.Attribute","size":{"width":45,"height":45},"position":{"x":695,"y":932},"angle":0,"id":"d2382839-6dfb-45e0-8588-737644556544","z":196,"attrs":{".outer":{"stroke":"transparent","fill":"#feb663","stroke-dasharray":"0"},"text":{"font-family":"Roboto Condensed","font-size":11,"text":"address","font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(10)"}},"position":0.5}],"source":{"id":"79a8b55e-c283-4a35-8493-9ae5deb4b0aa"},"target":{"id":"6c43e6ca-0fea-47f1-934b-47f93c4fdfe7"},"id":"db7f6d38-0d1d-4a80-9e00-99db13e7ce13","z":197,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"varchar(20)"}},"position":0.5}],"source":{"id":"79a8b55e-c283-4a35-8493-9ae5deb4b0aa"},"target":{"id":"d2382839-6dfb-45e0-8588-737644556544"},"id":"0ef2c80d-4193-42b8-a0a8-e2af6cac7a00","z":198,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"79a8b55e-c283-4a35-8493-9ae5deb4b0aa"},"target":{"id":"1688cc4b-002d-42ca-8761-0dcc39fd317a"},"id":"f9e08aaf-ba01-4d59-8c2f-771f8404b1f2","z":199,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[{"attrs":{"text":{"text":"serial"}},"position":0.5}],"source":{"id":"1688cc4b-002d-42ca-8761-0dcc39fd317a"},"target":{"id":"f0240494-9372-4afb-8ed6-d1d64b5d6a0c"},"id":"38b2faf9-8c72-4c38-b0c3-6a7bee85e8f8","z":200,"attrs":{}},{"type":"erd.Key","size":{"width":45,"height":45},"position":{"x":437.5,"y":757.5},"angle":0,"id":"dc1e3e9c-0732-4c68-91e2-325d1afd8123","z":201,"attrs":{"text":{"text":"Key","font-weight":"Normal","font-family":"Roboto Condensed","font-size":11,"fill":"#f6f6f6","stroke-width":0},".outer":{"stroke":"transparent","fill":"#fe854f","stroke-dasharray":"0"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"5ecc762a-43fb-40fb-8354-55930bcebbb5"},"target":{"id":"dc1e3e9c-0732-4c68-91e2-325d1afd8123"},"id":"8d88b1ba-7b51-4e86-86af-dc09299a64fa","z":202,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"labels":[],"source":{"id":"dc1e3e9c-0732-4c68-91e2-325d1afd8123"},"target":{"id":"79a8b55e-c283-4a35-8493-9ae5deb4b0aa"},"id":"76a8423e-5f12-4e0d-ae19-aca98e459f47","z":203,"attrs":{}}]}

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
    const relationships = new Map()
    const keys = new Map()
    const attributes = new Map()
    const links = new Map()
    for (let i = 0; i < jsonObj.cells.length; i++) {
        switch (jsonObj.cells[i].type) {
            case 'erd.Entity':
                entities.set(jsonObj.cells[i].id, jsonObj.cells[i].attrs.text.text)
                break;
            case 'erd.Relationship':
                relationships.set(jsonObj.cells[i].id, jsonObj.cells[i].attrs.text.text)
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
    const relationshipToEntity = new Map() // structure: {"relationship_id": set(id: "entity_id", link: "link_id")} // note: link is unused
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

    let res = ""

    // Step 4: Fill in ddl for entity
    let entityPrimaryKeys = new Map()
    let entityPrimaryKeysWithType = new Map()
    let entitiesQueue = Array.from(entityToKey.keys())
    while (entitiesQueue.length !== 0) {
        const key = entitiesQueue[0]
        const values = entityToKey.get(entitiesQueue[0])
        entitiesQueue.shift()

        let ddlForCurrEntity = ("CREATE TABLE " + entities.get(key) + " (\n")
        let currKeys = []
        let currKeysWithType = []
        let currForeignKeys = []

        if (weakEntity.has(key)) {
            // Find entities that it depends on
            let dependentEntities = []
            for (let [keyId, entityId] of keyToEntity) {
                if (entityId === key) {
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
                if (!entityPrimaryKeys.has(dependentEntities[i].id)) {
                    dependencyReady = false
                    break
                }
            }
            if (!dependencyReady) {
                entitiesQueue.push(key)
                continue
            }

            // If ready
            for (let i = 0; i < dependentEntities.length; i++) {
                let dependentEntityId = dependentEntities[i].id
                let dependentEntityName = entities.get(dependentEntityId)
                let keysWithType = entityPrimaryKeysWithType.get(dependentEntityId)
                for (let j = 0; j < keysWithType.length; j++) {
                    let keyName = dependentEntityName + "_" + keysWithType[j].split(" ")[0]
                    let keyType = keysWithType[j].split(" ")[1]
                    ddlForCurrEntity += ("\t" + keyName + " " + keyType + ", \n")
                    currKeysWithType.push(keyName + " " + keyType)
                    currKeys.push(keyName)
                    currForeignKeys.push({entity: dependentEntityName, attribute: keysWithType[j].split(" ")[0], currEntityAttribute: keyName})
                }
            }
        }

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
            ddlForCurrEntity += ("\t" + attributeName + " " + linkWords + ", \n");
            currKeys.push(attributeName)
            currKeysWithType.push(attributeName + " " + linkWords)
        }

        if (entityToAttribute.get(key) !== undefined) {
            const currEntityAttributes = Array.from(entityToAttribute.get(key))
            for (let i = 0; i < currEntityAttributes.length; i++) {
                if (!links.has(currEntityAttributes[i].link) || links.get(currEntityAttributes[i].link).length === 0) {
                    throw new Error("[Graph validation error] Got entity to attribute connection without data type specified")
                }
                let attributeName = attributes.get(currEntityAttributes[i].id)
                let linkWords = links.get(currEntityAttributes[i].link).join(" ")
                ddlForCurrEntity += ("\t" + attributeName + " " + linkWords + ", \n")
            }
        }

        entityPrimaryKeys.set(key, currKeys)
        entityPrimaryKeysWithType.set(key, currKeysWithType)
        ddlForCurrEntity += ("\tPRIMARY KEY (" + currKeys.join(",") + ")")

        if (currForeignKeys.length > 0) {
            ddlForCurrEntity += ",\n"
            for (let i = 0; i < currForeignKeys.length; i++) {
                ddlForCurrEntity += ("\tCONSTRAINT fk_" + i + "_" + entities.get(key)
                    + " FOREIGN KEY(" + currForeignKeys[i].currEntityAttribute + ")"
                    + " REFERENCES " + currForeignKeys[i].entity + "(" + currForeignKeys[i].attribute + "), \n")
            }
            ddlForCurrEntity = ddlForCurrEntity.trim()
            ddlForCurrEntity = ddlForCurrEntity.substring(0, ddlForCurrEntity.length-1)
        }
        ddlForCurrEntity += "\n)\n"

        res += ddlForCurrEntity
    }

    // Step 5: Fill in ddl for relationship
    // TODO: Test case for unary
    for (let [key, values] of relationshipToEntity) {
        let ddlForCurrRelationship = ("CREATE TABLE " + relationships.get(key) + " (\n")
        let currKeys = []
        let currForeignKeys = []

        if (relationshipToKey.get(key) !== undefined) {
            const currRelationshipKeys = relationshipToKey.get(key)
            for (let i = 0; i < currRelationshipKeys.length; i++) {
                if (!keyToAttribute.has(currRelationshipKeys[i]) && !keyToEntity.has(currRelationshipKeys[i])) {
                    throw new Error("[Graph validation error] Got relationship -> key connection unconnected with either attribute or entity")
                }
                if (keyToAttribute.has(currRelationshipKeys[i])) {
                    // Relationship key type 1: key -> attribute
                    let linkId = keyToAttribute.get(currRelationshipKeys[i]).link
                    if (!links.has(linkId) || links.get(linkId).length === 0) {
                        throw new Error("[Graph validation error] Got key to attribute connection without data type specified")
                    }
                    let attributeName = attributes.get(keyToAttribute.get(currRelationshipKeys[i]).id)
                    let linkWords = links.get(linkId).join(" ")
                    ddlForCurrRelationship += ("\t" + attributeName + " " + linkWords + ", \n");
                    currKeys.push(attributeName)
                } else {
                    // Relationship key type 2: relationship -> key -> entity
                    ddlForCurrRelationship += ("\t" + entityPrimaryKeysWithType.get(keyToEntity.get(currRelationshipKeys[i]).id) + ", \n")
                    currKeys.push(entityPrimaryKeys.get(keyToEntity.get(currRelationshipKeys[i]).id))
                }
            }
        }

        const currRelationshipImplicitKeys = Array.from(values)
        for (let i = 0; i < currRelationshipImplicitKeys.length; i++) {
            // Relationship key type 3: relationship -> entity
            let entityId = currRelationshipImplicitKeys[i].id
            let entityName = entities.get(entityId)
            let keysWithType = entityPrimaryKeysWithType.get(entityId)
            for (let j = 0; j < keysWithType.length; j++) {
                let keyName = entityName + "_" + keysWithType[j].split(" ")[0]
                let keyType = keysWithType[j].split(" ")[1]
                ddlForCurrRelationship += ("\t" + keyName + " " + keyType + ", \n")
                currKeys.push(keyName)
                currForeignKeys.push({entity: entityName, attribute: keysWithType[j].split(" ")[0], currEntityAttribute: keyName})
            }
        }

        if (relationshipToAttribute.get(key) !== undefined) {
            const currRelationshipAttributes = Array.from(relationshipToAttribute.get(key))
            for (let i = 0; i < currRelationshipAttributes.length; i++) {
                if (!links.has(currRelationshipAttributes[i].link) || links.get(currRelationshipAttributes[i].link) === 0) {
                    throw new Error("[Graph validation error] Got relationship to attribute connection without data type specified")
                }
                let attributeName = attributes.get(currRelationshipAttributes[i].id)
                let linkWords = links.get(currRelationshipAttributes[i].link).join(" ")
                ddlForCurrRelationship += ("\t" + attributeName + " " + linkWords + ", \n")
            }
        }

        ddlForCurrRelationship += ("\tPRIMARY KEY (" + currKeys.join(",") + ")")

        if (currForeignKeys.length > 0) {
            ddlForCurrRelationship += ",\n"
            for (let i = 0; i < currForeignKeys.length; i++) {
                ddlForCurrRelationship += ("\tCONSTRAINT fk_" + i + "_" + relationships.get(key)
                    + " FOREIGN KEY(" + currForeignKeys[i].currEntityAttribute + ")"
                    + " REFERENCES " + currForeignKeys[i].entity + "(" + currForeignKeys[i].attribute + "), \n")
            }
            ddlForCurrRelationship = ddlForCurrRelationship.trim()
            ddlForCurrRelationship = ddlForCurrRelationship.substring(0, ddlForCurrRelationship.length-1)
        }
        ddlForCurrRelationship += "\n)\n"

        res += ddlForCurrRelationship
    }

    return res
}

function generateSqlDdl(jsonObj, syntax) {
    let result = generatePostgreSqlDdl(jsonObj)

    if (syntax === 'mysql') {
        // Reference: https://dev.mysql.com/doc/workbench/en/wb-migration-database-postgresql-typemapping.html
        let typeConversion = new Map()
        typeConversion.set("SMALLSERIAL", "SMALLINT")
        typeConversion.set("BIGSERIAL", "BIGINT")
        typeConversion.set("SERIAL", "INT")
        typeConversion.set("BOOLEAN", "TINYINT(1)")
        typeConversion.set("REAL", "FLOAT")
        typeConversion.set("NUMERIC", "DECIMAL")
        typeConversion.set("TIMESTAMP", "DATETIME")
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
