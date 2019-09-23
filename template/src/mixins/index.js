import { mapState,mapActions}  from 'vuex'
export const myMixin ={
    computed:{
        ...mapState({
            alertText: state => state.common.alertText,
        }),
    },
    watch:{
        '$store.state.common.loadingStatus' (newVal){
            if(!newVal) {
                this.hideLoading();
                this.$store.commit('common/LOADING_SHOW', true)
            }
        },
        '$store.state.common.alertStatus'(newVal) {
            if(newVal) {
                this.showAlert(this.alertText);
                this.$store.commit('common/ALERT_SHOW', {alertStatus:false, alertText: ''})
            }
        }
    },
    methods:{
        ...mapActions({
            orderServiceQueryOrderAction: 'order/orderServiceQueryOrderAction',
        }),
        showLoading(text) {
            this.$vux.loading.show({
                text,
                position: 'absolute'
            })
        },
        hideLoading() {
            this.$vux.loading.hide()
        },
        /**
         * 显示toast
         * @param text 内容
         */
        showToast (text, time ='3000') {
            // 显示文字
            this.$vux.toast.show({
                type: 'text',
                text,
                time,
                position: 'middle'
            })
        },
        /**
         * 显示alert
         * @param text 内容
         * @param title 标题
         * @returns {Promise} 点击确定后回调
         */
        showAlert (content, title = '', buttonText = '确定') {
            return new Promise ((resovle,) => {
                this.$vux.alert.show({
                    title,
                    content,
                    buttonText,
                    onShow () {

                    },
                    onHide () {
                        resovle(true)
                    }
                })
            })

        },
        /**
         * 显示confirm
         * @param msg 内容
         * @param title 标题
         * @param okText 确定按钮文本
         * @param cancelText 取消按钮文本
         * @return promise对象 true：点击确认按钮，false：点击取消按钮
         */
        showConfirm (content, title = '', confirmText = '确定', cancelText = '取消') {
            return new Promise((resolve, reject) => {
                this.$vux.confirm.show({
                    title,
                    content,
                    confirmText,
                    cancelText,
                    onConfirm (res) {
                        resolve(true, res);
                    },
                    onCancel () {
                        resolve(false);
                    }
                });
            });
        }
    }

}
