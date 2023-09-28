
import { Page } from '@patternfly/react-core';
import DataSource from './DataSource';
import InputParser from './InputParser';

function OCPPlugin() {
    var source = new DataSource()
    var parser = new InputParser()

    var form = parser.parseArcaInput(source.getArcaInput())
    return (
        <Page>{form.render()}</Page>
    );
}

export default OCPPlugin;
