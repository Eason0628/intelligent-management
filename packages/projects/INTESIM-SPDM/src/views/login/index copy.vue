<template>
    <div class="user-layout">
        <div class="title">{{ title }}</div>
        <a-row class="formRow">
            <a-col :offset="16" :span="8">
                <div class="login-panel-form">
                    <img class="titlePic" :src="imgSrc" />
                    <div class="topTitle">{{ $t("login.userLogin") }}</div>
                    <a-form :model="user" :rules="rules" ref="formRef" layout="vertical">
                        <a-form-item>
                            <a-input v-model:value="user.user" :placeholder="$t('login.inputUserName')">
                                <template #prefix>
                                    <Icon icon="UserOutlined" />
                                    <a-divider type="vertical" />
                                </template>
                            </a-input>
                        </a-form-item>
                        <a-form-item class="rememberMeBefore">
                            <a-input-password v-model:value="user.password" :placeholder="$t('login.inputPassWord')">
                                <template #prefix>
                                    <Icon icon="LockOutlined" />
                                    <a-divider type="vertical" />
                                </template>
                            </a-input-password>
                        </a-form-item>
                        <a-form-item name="rememberMe" class="rememberMe">
                            <a-checkbox v-model:checked="rememberMe">{{ $t("login.remeberPass") }}</a-checkbox>
                        </a-form-item>
                        <a-form-item class="between">
                            <a-button class="commitButton" block @click="onSubmit">{{ $t("login.login") }}</a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from "vuex";
export default defineComponent({
    name: 'Login',
    setup() {
        const state = reactive({
            title: "仿真数据管理平台",
            user: {
                user: "",
                password: "",
            },
            rememberMe: false,
        })
        return {
            ...toRefs(state),
        }
    }
})
</script>

<style lang="less" scoped>
.user-layout {
    display: flex;
    flex-direction: column;
    background: url(/images/loginBack.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;

    .title {
        flex: 2;
        color: #fff;
        font-size: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .formRow {
        flex: 3;

        .login-panel-form {
            border-radius: 4px;
            box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
            padding: 16px;
            width: 340px;
            background: #fff;
            height: 360px;

            .titlePic {
                height: 0px;
                margin-bottom: 10px;
            }

            .topTitle {
                font-size: 18px;
                margin: 10px 0;
                text-align: center;
                letter-spacing: 2px;
                font-weight: 600;
            }

            .ant-form {
                margin: 0 20px;

                .ant-input-affix-wrapper {
                    border-color: var(--primary-color);
                }

                .rememberMeBefore {
                    margin-bottom: 4px;
                }

                .rememberMe {
                    margin-bottom: 10px;

                    .ant-checkbox-wrapper {
                        color: #aaa;
                    }
                }

                .ant-input-prefix {
                    .anticon {
                        color: var(--primary-color);
                    }
                }

                :deep(.ant-input) {
                    height: 30px;
                }
            }

            .commitButton {
                width: 100%;
                background-image: linear-gradient(to right, #589eff, #7bc1ff) !important;
                border-radius: 4px;
                height: 40px;
                font-size: 16px;
                color: #fff !important;
                border-color: #ccc;
            }

            .commitButton:hover {
                background-image: linear-gradient(to right, #589eff, #7bc1ff) !important;
                color: #fff !important;
                border-color: #ccc;
            }
        }
    }
}
</style>