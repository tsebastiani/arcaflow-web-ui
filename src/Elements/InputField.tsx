import {  JSXElementConstructor, ReactElement } from "react"
import UIElement from "./UIElement"
class InputField implements UIElement {
    render(): ReactElement<any, string | JSXElementConstructor<any>> {
        return (
            <div></div>
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

export default InputField