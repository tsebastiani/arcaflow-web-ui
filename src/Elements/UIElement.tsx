import React from "react"

interface UIElement {
    describe(): string
    add(element: UIElement): void
    hasElements(): boolean
    getElements(): UIElement[]
    render(): React.ReactElement
    getId(): string
}

export default UIElement