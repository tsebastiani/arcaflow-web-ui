import DataSource from "./DataSource";
import Form from "./Elements/Form";
import Group from "./Elements/Group";
import UIElement from "./Elements/UIElement";
import InputField from "./Elements/InputField";
import {parse, stringify} from 'yaml'
import React from "react";
class InputParser {
    elements: React.ReactElement[] = []
    parseArcaInput(inputYaml: string):React.ReactElement[] {
        
        var objectYaml= parse(inputYaml)
        var group = new Form()
        var root = objectYaml.objects.RootObject.properties
        var keys=Object.keys(root)
        keys.forEach(k => this.parse(group, root[k]))

        return this.elements
    }

    parse(rootElement: UIElement, yamlObject: any): UIElement {
        if ('type' in yamlObject) {
            if (yamlObject.type.type_id == 'list'){
                var group = new Form()
                this.parse(group,yamlObject.type.items)
                rootElement.add(group)
                return group
            }
        }

        if ('type_id' in yamlObject && yamlObject.type_id == 'object'){
            var group = new Group()
            var self = this
            var keys = Object.keys(yamlObject.properties)
            keys.forEach(function(key){
                group.add(self.buildUiElement(yamlObject.properties[key]))
            })
            rootElement.add(group)
        }

        return rootElement
    }

    buildUiElement(yamlElement: any): UIElement {
        console.log(yamlElement)
        return new InputField()
    }


}

export default InputParser