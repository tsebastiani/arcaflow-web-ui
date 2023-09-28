import ArcaForm from "./Elements/ArcaForm";
import ArcaFormSection from "./Elements/ArcaFormSection";
import UIElement from "./Elements/UIElement";
import ArcaTextInput from "./Elements/ArcaTextInput";
import {parse, stringify} from 'yaml'
class InputParser {
    
    parseArcaInput(inputYaml: string): UIElement {
        
        var objectYaml= parse(inputYaml)
        var rootElement= new ArcaForm("rootElement")
        var root = objectYaml.objects.RootObject.properties
        var keys=Object.keys(root)
        keys.forEach(k => this.parse(rootElement, root[k], k, null, null))

        return rootElement
    }

    parse(rootElement: UIElement, yamlObject: any, elementId: string, name:string|null,description:string|null): UIElement {
        if ('type' in yamlObject) {
            if (yamlObject.type.type_id == 'list'){
                this.parse(rootElement,yamlObject.type.items,elementId,null,null)
            }
        }

        if ('type_id' in yamlObject && yamlObject.type_id == 'object'){
            var group = new ArcaFormSection(elementId, yamlObject.display.name, yamlObject.display.description)
            var self = this
            var keys = Object.keys(yamlObject.properties)
            keys.forEach(function(key){
                group.add(self.buildUiElement(yamlObject.properties[key],key,yamlObject.properties[key].display.name,yamlObject.properties[key].display.description))
            })
            rootElement.add(group)
        }

        return rootElement
    }

    buildUiElement(yamlElement: any, elementId: string, name: string, description: string): UIElement {
        console.log(yamlElement)
        return new ArcaTextInput(elementId, name, description)
    }


}

export default InputParser