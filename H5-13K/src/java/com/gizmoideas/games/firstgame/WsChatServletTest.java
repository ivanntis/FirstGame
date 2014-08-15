/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.gizmoideas.games.firstgame;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import org.apache.catalina.websocket.MessageInbound;
import org.apache.catalina.websocket.StreamInbound;
import org.apache.catalina.websocket.WebSocketServlet;
import org.apache.catalina.websocket.WsOutbound;
 
public class WsChatServletTest extends WebSocketServlet{
    private static final long serialVersionUID = 1L;
    private static ArrayList<MyMessageInbound> mmiList = new ArrayList<MyMessageInbound>();

    @Override
    protected StreamInbound createWebSocketInbound(String string, HttpServletRequest hsr) {
        return new MyMessageInbound();
    }
 
    private class MyMessageInbound extends MessageInbound{
        WsOutbound myoutbound;
 
        @Override
        public void onOpen(WsOutbound outbound){
            try {
                System.out.println("Open Client.");
                this.myoutbound = outbound;
                mmiList.add(this);
                outbound.writeTextMessage(CharBuffer.wrap("Bienvenido al chat Development Team!"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
 
        @Override
        public void onClose(int status){
            System.out.println("Close Client.");
            mmiList.remove(this);
        }
 
        @Override
        public void onTextMessage(CharBuffer cb) throws IOException{
            System.out.println("Accept Message : "+ cb);
            for(MyMessageInbound mmib: mmiList){
                CharBuffer buffer = CharBuffer.wrap(cb);
                mmib.myoutbound.writeTextMessage(buffer);
                mmib.myoutbound.flush();
            }
        }
 
        @Override
        public void onBinaryMessage(ByteBuffer bb) throws IOException{
        }
    }
    
}
