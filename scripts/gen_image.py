import requests
import base64
import os
import json

def generate_image():
    url = "https://younginpiniti-stable-diffusion-webui.hf.space/api/generate"
    payload = {
        "prompt": "lonely woman in desert wilderness beside water spring, divine light from heaven, gentle angel presence, soft watercolor anime style, emotional atmosphere, warm colors, masterpiece, best quality",
        "model_name": "🎨 Mistoon Anime V3 (카툰풍 애니메이션)",
        "negative_prompt": "low quality, blurry, dark, scary, violent, nsfw, text, watermark, signature, deformed, ugly, distorted",
        "num_inference_steps": 25,
        "guidance_scale": 7.5,
        "width": 640,
        "height": 360,
        "seed": -1
    }
    
    print("Starting API request to Stable Diffusion (this may take 5-10 minutes)...")
    
    try:
        response = requests.post(url, json=payload, timeout=900)
        response.raise_for_status()
        
        data = response.json()
        
        # image_base64 또는 image 키 확인
        img_data = data.get("image_base64") or data.get("image")
        
        if img_data:
            # base64 헤더 제거 (있을 경우)
            if "base64," in img_data:
                img_data = img_data.split("base64,")[1]
            
            # 저장 폴더 생성
            os.makedirs("img", exist_ok=True)
            
            # 파일 저장
            with open("img/창세기_16_1-16.png", "wb") as f:
                f.write(base64.b64decode(img_data))
            
            print("✅ SUCCESS: Image saved to img/창세기_16_1-16.png")
        else:
            print("❌ ERROR: No image data in response")
            with open("api_debug.json", "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
                
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")

if __name__ == "__main__":
    generate_image()
