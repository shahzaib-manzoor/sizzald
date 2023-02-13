export function getLocalIPs(callback) {
    let ips = [];
    let RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection;
    let pc = new RTCPeerConnection({ iceServers: [] });
    pc.createDataChannel('');
    pc.createOffer(offer => {
      pc.setLocalDescription(offer, () => {}, () => {});
    }, () => {});
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        let ip = /^candidate:.+ (\S+) \d+ typ/.exec(event.candidate.candidate)[1];
        if (ips.indexOf(ip) === -1) {
          ips.push(ip);
        }
      }
      if (event.candidate === null) {
        callback(ips);
        pc.close();
      }
    };
  }
  
 
  