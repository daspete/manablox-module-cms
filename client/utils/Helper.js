export default {
    PropsToData(vueInstance){
        let props = vueInstance._props;
        let data = {
            propData: {}
        };

        let propKeys = Object.keys(props);

        propKeys.forEach((propKey) => {
            data.propData[propKey] = props[propKey];
        })

        return data
    }
}
