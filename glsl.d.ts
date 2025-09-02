declare module 'babel-plugin-glsl/macro';

import { ShaderMaterial } from 'three';
import { ReactThreeFiber } from '@react-three/fiber';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            hexShaderMaterial: ReactThreeFiber.Object3DNode<ShaderMaterial, typeof ShaderMaterial>;
        }
    }
}
