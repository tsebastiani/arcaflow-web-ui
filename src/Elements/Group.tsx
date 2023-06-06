import UIElement from "./UIElement"
import React from "react"

class Group implements UIElement {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        var ref = this.elements
        return (
        <div>
            {ref.map((element,_)=> element.render())}
        </div>
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
export default Group