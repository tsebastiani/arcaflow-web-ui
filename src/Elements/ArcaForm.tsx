import UIElement from "./UIElement"
import React from "react"
import {
    ActionGroup,
    Button,
  Form
} from '@patternfly/react-core';

class ArcaForm implements UIElement {
    id: string
    constructor(id: string){
        this.id=id
    }
    getId(): string {
        return this.id
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        var ref = this.elements
        return (
        <Form id={this.id} isWidthLimited>
            {ref.map((element,_)=> element.render())}
      <ActionGroup>
        <Button variant="primary">Submit</Button>
        <Button variant="link">Cancel</Button>
      </ActionGroup>
        </Form>
        )
    }

    elements: Array<UIElement> = new Array<UIElement>()
    describe(): string {
        return "I'm a Form"
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
export default ArcaForm