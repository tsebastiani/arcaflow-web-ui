import UIElement from "./UIElement"
import React from "react"
import { Button, FormFieldGroup, FormFieldGroupExpandable, FormFieldGroupHeader, FormSection, Title } from '@patternfly/react-core';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
class ArcaFormSection implements UIElement {
    id: string
    name: string
    description: string
    constructor(id: string, name: string, description: string){
        this.name=name
        this.description=description
        this.id=id
    }
    getId(): string {
        return this.id
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {

        var self = this
        return (
   
        <FormFieldGroup
        header={
        <FormFieldGroupHeader
            titleText={{ text: self.name , id: self.id }}
            titleDescription={self.description}
            actions={
            <Button variant="plain" aria-label="Remove">
                <TrashIcon />
            </Button>
            }
        />
        }
        >
            {self.elements.map((element,_)=> element.render())}
        </FormFieldGroup>

        )
    }

    elements: Array<UIElement> = new Array<UIElement>()
    describe(): string {
        return "I'm a Group"
    }
    add(element: UIElement): void {
        this.elements.push(element)
    }
    hasElements(): boolean {
        return this.elements.length>0
    }
    getElements(): UIElement[] {
        return this.elements
    }

    
}
export default ArcaFormSection