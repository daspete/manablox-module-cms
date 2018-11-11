<template>
    <div class="cms__pagebuilder">
        <div class="row">
            <div class="col-9">
                <div class="cms__preview">
                    <component
                        v-for="(component, componentIndex) in components"
                        :key="`component--${ componentIndex }--${ component.name }`"
                        :is="component.name"
                        v-bind="component.props"
                        v-model="components[componentIndex].props"
                    />
                </div>

            </div>
            <div class="col-3">
                <div class="cms__settings">
                    <component
                        v-for="(component, componentIndex) in components"
                        :key="`admin--component--${ componentIndex }--${ component.name }`"
                        :is="`${component.name}Admin`"
                        v-bind="component.props"
                        v-model="components[componentIndex].props"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    asyncData(){

        return {
            availableComponents: [
                'ContentBlock'
            ],

            components: [{
                name: 'ContentBlock',
                props: {}
            },
            {
                name: 'ContentBlock',
                props: {}
            },
            {
                name: 'ContentBlock',
                props: {}
            },
            {
                name: 'ContentBlock',
                props: {}
            },
            {
                name: 'ContentBlock',
                props: {}
            },
            {
                name: 'ContentBlock',
                props: {}
            },
            {
                name: 'ContentBlock',
                props: {}
            },
            {
                name: 'ContentBlock',
                props: {}
            },
            {
                name: 'ContentBlock',
                props: {}
            },
            {
                name: 'ContentBlock',
                props: {}
            },
            {
                name: 'ContentBlock',
                props: {}
            }]
        }
    }

}
</script>

<style lang="scss">
.cms {
    &__pagebuilder {
        position: absolute;
        left: 0;
        right: 30px;

        height: 100%;

        .row {
            height: 100%;
        }
    }
}
</style>
