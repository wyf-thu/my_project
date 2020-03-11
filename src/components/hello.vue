<template>
    <div>
    	<h1>test</h1>
        <div id='signupbox'>
            <div id="signup" style="text-align: center; border-radius: 5px; position: relative; top: 15%; height: 60%; left:70%; width:15%; display: inline-block; background-color: rgb(255, 255, 255, 0.8)">
                <br>
                <div>
                    <p style="font-size: 20px">账号密码登录</p>
                </div>
                <div>
                    <input id="account" style="width: 80%;" type="text" placeholder="账号">
                </div>
                <br>
                <div>
                    <input id="password" style="width: 80%;" type="password" placeholder="密码">
                </div>
                <br>
                <div style="">
                    <button id="register" class="btn btn-info" @click="goregister">注册</button>
                    <button id="login" class="btn btn-success" @click="gosend">登录</button>
                </div>
                <label v-if="seen == 'registersuc'">注册成功！请登录</label>
                <label v-if="seen == 'loginfail'">登录失败！</label>
                <label v-if="seen == 'loginsuc'">登录成功！</label>
            </div>
        </div>
        <br style="line-height: 20px">
    </div>
</template>

<script>
</script>
