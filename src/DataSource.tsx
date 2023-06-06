class DataSource {
    getArcaInput(): string {
        var arcainput = `
        input:
        root: RootObject
        objects:
          RootObject:
            id: RootObject
            properties:
              input_list:
                type:
                  type_id: list
                  items:
                    id: input_item
                    type_id: object
                    properties:
                      kubeconfig:
                        display:
                          description: The complete kubeconfig file as a string
                          name: Kubeconfig file contents
                        type:
                          type_id: string
                        required: true
                      namespace:
                          display:
                            description: The namespace where the container will be deployed
                            name: Namespace
                          type:
                            type_id: string
                          required: true
                      node_selector:
                          display:
                            description: kubernetes node name where the plugin must be deployed
                          type:
                            type_id: map
                            values:
                              type_id: string
                            keys:
                              type_id: string
                          required: true
                      duration:
                        display:
                          name: duration the scenario expressed in seconds
                          description: stop stress test after T seconds. One can also specify the units of time in
                            seconds, minutes, hours, days or years with the suffix s, m, h, d or y
                        type:
                          type_id: string
                        required: true
                      cpu_count:
                        display:
                          description: Number of CPU cores to be used (0 means all)
                          name: number of CPUs
                        type:
                          type_id: integer
                        required: true
                      cpu_method:
                        display:
                          description: CPU stress method
                          name: fine grained control of which cpu stressors to use (ackermann, cfloat etc.)
                        type:
                          type_id: string
                        required: true
                      cpu_load_percentage:
                        display:
                          description: load CPU by percentage
                          name: CPU load
                        type:
                          type_id: integer
                        required: true
        `
        return arcainput
    }
}
export default DataSource