import {json2xml} from 'xml-js';

const jsonObj = {
    "cells": [
        {
            "type": "standard.Rectangle",
            "position": {
                "x": 100,
                "y": 110
            },
            "size": {
                "width": 230,
                "height": 50
            },
            "angle": 0,
            "id": "f7d17de6-0af5-4b03-836b-0d465e9a2285",
            "z": 142,
            "attrs": {
                "body": {
                    "stroke": "transparent",
                    "fill": "transparent",
                    "rx": 2,
                    "ry": 2,
                    "width": 50,
                    "height": 30,
                    "strokeDasharray": "0"
                },
                "label": {
                    "fontSize": 24,
                    "fill": "#4b4a67",
                    "text": "Keep On Trucking ERD",
                    "fontFamily": "Roboto Condensed",
                    "fontWeight": "Normal",
                    "strokeWidth": 0
                },
                "root": {
                    "dataTooltipPosition": "left",
                    "dataTooltipPositionSelector": ".joint-stencil"
                }
            }
        },
        {
            "type": "erd.Relationship",
            "size": {
                "width": 110,
                "height": 60
            },
            "position": {
                "x": 350,
                "y": 270
            },
            "angle": 0,
            "id": "6d18ba6b-af4f-4dad-b1f8-a630c066c30f",
            "z": 143,
            "attrs": {
                ".outer": {
                    "fill": "#61549c",
                    "stroke": "transparent",
                    "stroke-dasharray": "0"
                },
                "text": {
                    "text": "study",
                    "font-family": "Roboto Condensed",
                    "font-size": 11,
                    "font-weight": "Normal",
                    "fill": "#f6f6f6",
                    "stroke-width": 0
                },
                "root": {
                    "dataTooltipPosition": "left",
                    "dataTooltipPositionSelector": ".joint-stencil"
                }
            }
        },
        {
            "type": "erd.Entity",
            "size": {
                "width": 90,
                "height": 36
            },
            "position": {
                "x": 360,
                "y": 470
            },
            "angle": 0,
            "id": "652c78dc-8e29-44c5-8dee-a414a9c5d8b9",
            "z": 144,
            "attrs": {
                ".outer": {
                    "fill": "#31d0c6",
                    "stroke": "transparent",
                    "rx": 3,
                    "ry": 3,
                    "stroke-dasharray": "0"
                },
                "text": {
                    "text": "student",
                    "font-family": "Roboto Condensed",
                    "font-size": 11,
                    "font-weight": "Normal",
                    "fill": "#f6f6f6",
                    "stroke-width": 0
                },
                "root": {
                    "dataTooltipPosition": "left",
                    "dataTooltipPositionSelector": ".joint-stencil"
                }
            }
        },
        {
            "type": "erd.Entity",
            "size": {
                "width": 90,
                "height": 36
            },
            "position": {
                "x": 360,
                "y": 170
            },
            "angle": 0,
            "id": "4d170c66-849f-4ff3-90be-ff866c130e71",
            "z": 145,
            "attrs": {
                ".outer": {
                    "fill": "#31d0c6",
                    "stroke": "transparent",
                    "rx": 3,
                    "ry": 3,
                    "stroke-dasharray": "0"
                },
                "text": {
                    "text": "university",
                    "font-family": "Roboto Condensed",
                    "font-size": 11,
                    "font-weight": "Normal",
                    "fill": "#f6f6f6",
                    "stroke-width": 0
                },
                "root": {
                    "dataTooltipPosition": "left",
                    "dataTooltipPositionSelector": ".joint-stencil"
                }
            }
        },
        {
            "type": "app.Link",
            "router": {
                "name": "normal"
            },
            "connector": {
                "name": "rounded"
            },
            "labels": [],
            "source": {
                "id": "4d170c66-849f-4ff3-90be-ff866c130e71"
            },
            "target": {
                "id": "6d18ba6b-af4f-4dad-b1f8-a630c066c30f"
            },
            "id": "c7e75c69-9f8d-4a34-b7cb-48e6d73462a4",
            "z": 146,
            "attrs": {
                "line": {
                    "targetMarker": {
                        "d": "M 0 0 0 0"
                    }
                }
            }
        },
        {
            "type": "erd.Attribute",
            "size": {
                "width": 40,
                "height": 40
            },
            "position": {
                "x": 220,
                "y": 600
            },
            "angle": 0,
            "id": "d8e6b2a5-1a33-41a1-aad8-3c6a9fd05fa9",
            "z": 148,
            "attrs": {
                ".outer": {
                    "stroke": "transparent",
                    "fill": "#feb663",
                    "stroke-dasharray": "0"
                },
                "text": {
                    "font-family": "Roboto Condensed",
                    "font-size": 11,
                    "text": "matric",
                    "font-weight": "Normal",
                    "fill": "#f6f6f6",
                    "stroke-width": 0
                },
                "root": {
                    "dataTooltipPosition": "left",
                    "dataTooltipPositionSelector": ".joint-stencil"
                }
            }
        },
        {
            "type": "erd.Attribute",
            "size": {
                "width": 40,
                "height": 40
            },
            "position": {
                "x": 385,
                "y": 600
            },
            "angle": 0,
            "id": "c2114e6a-b5af-4e76-9c5a-45c1216acd53",
            "z": 149,
            "attrs": {
                ".outer": {
                    "stroke": "transparent",
                    "fill": "#feb663",
                    "stroke-dasharray": "0"
                },
                "text": {
                    "font-family": "Roboto Condensed",
                    "font-size": 11,
                    "text": "name",
                    "font-weight": "Normal",
                    "fill": "#f6f6f6",
                    "stroke-width": 0
                },
                "root": {
                    "dataTooltipPosition": "left",
                    "dataTooltipPositionSelector": ".joint-stencil"
                }
            }
        },
        {
            "type": "erd.Attribute",
            "size": {
                "width": 40,
                "height": 40
            },
            "position": {
                "x": 540,
                "y": 600
            },
            "angle": 0,
            "id": "be840a3d-333f-41d0-bc34-adc8894a9247",
            "z": 150,
            "attrs": {
                ".outer": {
                    "stroke": "transparent",
                    "fill": "#feb663",
                    "stroke-dasharray": "0"
                },
                "text": {
                    "font-family": "Roboto Condensed",
                    "font-size": 11,
                    "text": "address",
                    "font-weight": "Normal",
                    "fill": "#f6f6f6",
                    "stroke-width": 0
                },
                "root": {
                    "dataTooltipPosition": "left",
                    "dataTooltipPositionSelector": ".joint-stencil"
                }
            }
        },
        {
            "type": "app.Link",
            "router": {
                "name": "normal"
            },
            "connector": {
                "name": "rounded"
            },
            "labels": [],
            "source": {
                "id": "652c78dc-8e29-44c5-8dee-a414a9c5d8b9"
            },
            "target": {
                "id": "c2114e6a-b5af-4e76-9c5a-45c1216acd53"
            },
            "id": "6b393fff-0333-41fd-ae53-0fe3f66e2600",
            "z": 152,
            "attrs": {
                "line": {
                    "targetMarker": {
                        "d": "M 0 0 0 0"
                    }
                }
            }
        },
        {
            "type": "app.Link",
            "router": {
                "name": "normal"
            },
            "connector": {
                "name": "rounded"
            },
            "labels": [],
            "source": {
                "id": "652c78dc-8e29-44c5-8dee-a414a9c5d8b9"
            },
            "target": {
                "id": "be840a3d-333f-41d0-bc34-adc8894a9247"
            },
            "id": "61acc337-e243-4c9e-9a7d-5d499fc6f743",
            "z": 153,
            "attrs": {
                "line": {
                    "targetMarker": {
                        "d": "M 0 0 0 0"
                    }
                }
            }
        },
        {
            "type": "erd.Key",
            "size": {
                "width": 40,
                "height": 40
            },
            "position": {
                "x": 290,
                "y": 540
            },
            "angle": 0,
            "id": "48d9cd3c-0c7e-4905-9f8b-31b67db6ed16",
            "z": 154,
            "attrs": {
                "text": {
                    "text": "Key",
                    "font-weight": "Normal",
                    "font-family": "Roboto Condensed",
                    "font-size": 11,
                    "fill": "#f6f6f6",
                    "stroke-width": 0
                },
                ".outer": {
                    "stroke": "transparent",
                    "fill": "#fe854f",
                    "stroke-dasharray": "0"
                },
                "root": {
                    "dataTooltipPosition": "left",
                    "dataTooltipPositionSelector": ".joint-stencil"
                }
            }
        },
        {
            "type": "app.Link",
            "router": {
                "name": "normal"
            },
            "connector": {
                "name": "rounded"
            },
            "labels": [],
            "source": {
                "id": "652c78dc-8e29-44c5-8dee-a414a9c5d8b9"
            },
            "target": {
                "id": "48d9cd3c-0c7e-4905-9f8b-31b67db6ed16"
            },
            "id": "e0c35835-9974-4fe6-9792-0f17e07eae08",
            "z": 155,
            "attrs": {
                "line": {
                    "targetMarker": {
                        "d": "M 0 0 0 0"
                    }
                }
            }
        },
        {
            "type": "app.Link",
            "router": {
                "name": "normal"
            },
            "connector": {
                "name": "rounded"
            },
            "labels": [],
            "source": {
                "id": "48d9cd3c-0c7e-4905-9f8b-31b67db6ed16"
            },
            "target": {
                "id": "d8e6b2a5-1a33-41a1-aad8-3c6a9fd05fa9"
            },
            "id": "992e2794-bb8e-432b-836b-b43ce4f1f2ba",
            "z": 156,
            "attrs": {
                "line": {
                    "targetMarker": {
                        "d": "M 0 0 0 0"
                    }
                }
            }
        },
        {
            "type": "erd.Key",
            "size": {
                "width": 42.5,
                "height": 40
            },
            "position": {
                "x": 383.75,
                "y": 365
            },
            "angle": 0,
            "id": "e760ef33-eb8d-4202-9edb-023dbd58852d",
            "z": 157,
            "attrs": {
                "text": {
                    "text": "Key",
                    "font-weight": "Normal",
                    "font-family": "Roboto Condensed",
                    "font-size": 11,
                    "fill": "#f6f6f6",
                    "stroke-width": 0
                },
                ".outer": {
                    "stroke": "transparent",
                    "fill": "#fe854f",
                    "stroke-dasharray": "0"
                },
                "root": {
                    "dataTooltipPosition": "left",
                    "dataTooltipPositionSelector": ".joint-stencil"
                }
            }
        },
        {
            "type": "app.Link",
            "router": {
                "name": "normal"
            },
            "connector": {
                "name": "rounded"
            },
            "labels": [],
            "source": {
                "id": "e760ef33-eb8d-4202-9edb-023dbd58852d"
            },
            "target": {
                "id": "6d18ba6b-af4f-4dad-b1f8-a630c066c30f"
            },
            "id": "82350c71-63e5-4aaa-954c-46d4671a6a41",
            "z": 158,
            "attrs": {
                "line": {
                    "targetMarker": {
                        "d": "M 0 0 0 0"
                    }
                }
            }
        },
        {
            "type": "app.Link",
            "router": {
                "name": "normal"
            },
            "connector": {
                "name": "rounded"
            },
            "labels": [
                {
                    "attrs": {
                        "text": {
                            "text": "(1,1)"
                        }
                    },
                    "position": 30
                }
            ],
            "source": {
                "id": "652c78dc-8e29-44c5-8dee-a414a9c5d8b9"
            },
            "target": {
                "id": "e760ef33-eb8d-4202-9edb-023dbd58852d"
            },
            "id": "6b0baa8e-5c58-45fd-b463-cabc95afd0bc",
            "z": 159,
            "attrs": {
                "line": {
                    "targetMarker": {
                        "d": "M 0 0 0 0"
                    }
                }
            }
        },
        {
            "type": "app.Link",
            "router": {
                "name": "oneSide",
                "args": {
                    "side": "left"
                }
            },
            "connector": {
                "name": "normal"
            },
            "labels": [],
            "source": {
                "id": "48d9cd3c-0c7e-4905-9f8b-31b67db6ed16"
            },
            "target": {
                "id": "e760ef33-eb8d-4202-9edb-023dbd58852d"
            },
            "id": "78df4e3b-28b8-4092-95e7-fc1bdf0dbbd5",
            "z": 160,
            "attrs": {
                "line": {
                    "targetMarker": {
                        "d": "M 0 0 0 0"
                    }
                }
            }
        }
    ]
};

function validateJson(jsonObj) {
    if (jsonObj === undefined || jsonObj.cells === undefined) {
        console.log("The graph is empty or does not contain any cell")
        return false;
    }

    for (let i = 0; i < jsonObj.cells.length; i++) {
        if (jsonObj.cells[i].type === undefined) {
            console.log("The graph contains visual objects with no type")
            return false;
        }

        if (jsonObj.cells[i].type === 'app.Link') {
            if (jsonObj.cells[i].source === undefined || jsonObj.cells[i].source.id === undefined
                || jsonObj.cells[i].target === undefined || jsonObj.cells[i].target.id === undefined) {
                console.log("The graph contains link with no source or target")
                return false;
            }
        } else if (jsonObj.cells[i].type === 'erd.Entity' || jsonObj.cells[i].type === 'erd.Relationship'
            || jsonObj.cells[i].type === 'erd.Key' || jsonObj.cells[i].type === 'erd.Attribute') {
            if (jsonObj.cells[i].id === undefined) {
                console.log("The graph contains shape with id")
                return false;
            }
            if (jsonObj.cells[i].attrs === undefined ||
                jsonObj.cells[i].attrs.text === undefined || jsonObj.cells[i].attrs.text.text === undefined) {
                console.log("The graph contains shape with no value")
                return false
            }
        }
    }
    return true;
}

function simplifyJson(jsonObj) {
    let res = []
    for (let i = 0; i < jsonObj.cells.length; i++) {
        if (jsonObj.cells[i].type === 'app.Link') {
            res.push({
                Link: {
                    _attributes: {from: jsonObj.cells[i].source.id, to: jsonObj.cells[i].target.id}
                }
            })
        } else if (jsonObj.cells[i].type === 'erd.Entity' || jsonObj.cells[i].type === 'erd.Relationship'
            || jsonObj.cells[i].type === 'erd.Key' || jsonObj.cells[i].type === 'erd.Attribute') {
            res.push({
                Shape: {
                    _attributes: {id: jsonObj.cells[i].id, type: jsonObj.cells[i].type, value: jsonObj.cells[i].attrs.text.text}
                }
            })
        }
    }
    return res
}

if (validateJson(jsonObj)) {
    const xml = json2xml(JSON.stringify(simplifyJson(jsonObj)), { compact: true, spaces: 4 });
    console.log(xml);
}


