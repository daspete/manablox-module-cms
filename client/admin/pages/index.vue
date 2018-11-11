<template>
    <div class="cms">
        <div class="row">
            <div class="col-2">
                <div class="cms__collections">
                    <Button to="/controller/cms/create" small>Add new Page</Button>
                    <div class="cms__collections__tree">
                        PAGETREE
                    </div>
                </div>
            </div>
            <div class="col-10">
                <nuxt-child />
            </div>
        </div>

    </div>
</template>

<script>
export default {

    asyncData(){

        return {

        }
    }

}
</script>

<style lang="scss">
.cms {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &__preview {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: calc(100vh - 42px);
        overflow: auto;
    }

    &__settings {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: calc(100vh - 42px);
        overflow: auto;
        background-color: rgba(white, 0.3);

        .row {
            margin: 0 !important;
        }
    }

    &__collections {
        height: calc(100vh - 78px);

        &__tree {
            overflow: auto;
            height: 100%;
        }
    }
}
</style>

