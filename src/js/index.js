/**
 * Created by ChenShuai on 2017/2/20.
 */
import $ from 'expose-loader?jQuery!jquery'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/js/bootstrap';
import '../css/index.css';
import '../img/banner.jpg'
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/comment-box';

$(document).ready(function () {
    $('#content2').text('jquery loaded');
});