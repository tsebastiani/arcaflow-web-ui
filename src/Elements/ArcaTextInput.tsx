import {  JSXElementConstructor, ReactElement } from "react"
import UIElement from "./UIElement"
import { FormGroup, TextInput } from "@patternfly/react-core"
class ArcaTextInput implements UIElement {
    id: string
    name: string
    description: string
    constructor(id: string, name: string, description: string){
        this.id=id
        this.name=name
        this.description=description
    }
    getId(): string {
        return this.id
    }
    render(): ReactElement<any, string | JSXElementConstructor<any>> {
        return (
            <FormGroup label={this.name} helperText={this.description}>
                <TextInput type="text" id={this.id} />
            </FormGroup>
        )
    }

    describe(): string {
        return "i'm an input Field"
    }
    add(element: UIElement): void {
        return
    }
    hasElements(): boolean {
        return false
    }
    getElements(): UIElement[] {
        return []
    }

}

export default ArcaTextInput